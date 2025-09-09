import { Badge, Box, Button, Container, Divider, HStack, Icon, IconButton, Image, Input, InputGroup, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchCard from '../components/Search/SearchCard'
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import HadithCard from '../components/Hadith/HadithCard';
import { IoAdd, IoDiamond, IoSearch } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward, IoIosCheckmark } from 'react-icons/io';
import Header from '../layouts/Home/Header';
import { LuSearchX } from "react-icons/lu";
import { DelimitedArrayParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { GoCopy } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import api from '../components/lib/api';

const getRequest = (url, { arg: { model_type, content, ...data } }) => {
  return api.get(url + (model_type ? `&model_type=${model_type}` : '') + (content ? `&content=${content}` : ''))
}

const Search = () => {

  const [searchContent, setSearchContent] = useState('')

  const [filters, setFilters] = useQueryParams({
    type: withDefault(StringParam, 'semantic_bge'),
    keys: withDefault(DelimitedArrayParam, []),
  })

  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('content');

  const { register: registerSearch, handleSubmit: handleSubmitSearch, setValue: setValueSearch, getValues: getValuesSearch } = useForm()

  const [selectedHadith, setSelectedHadith] = useState('')
  const navigate = useNavigate()
  const { onOpen: onOpenSimilar, onClose: onCloseSimilar, isOpen: isOpenSimilar } = useDisclosure()

  const { trigger: triggerSearch, isMutating: isMutatingSearch, data: dataSearch } = useSWRMutation(`user/volume/content/search?text_types=حديث`, getRequest, {
    onSuccess: () => {
      setSearchContent(getValuesSearch('content'))
    }
  })

  // const { data: dataSearch, isLoading: isLoadingSearch } = useSWR(searchQuery && `user/ai/search?content=${filters?.keys?.join(' ') || searchQuery}&search_config=${filters?.type}&size=100&from_=0`)

  useEffect(() => {
    document.title = searchQuery || 'جستجو در احادیث';
  }, [searchQuery]);

  const handleItemClick = (id) => {
    navigate(`/hadith/${id}?page=1`)
  }

  const SubmitSearch = (e) => {
    console.log(e)
  }

  const handleSearchType = (type) => {
    setFilters({ type: type })
    triggerSearch({ model_type: type, content: getValuesSearch('content') })
  }
  const handleSearchButton = () => {
    triggerSearch({ model_type: filters?.type, content: getValuesSearch('content') })
  }


  return (
    <Container maxW="1150px" padding={0} minH={'calc( 100vh - 150px )'}>

      <Box as={VStack} mt={'100px'} >
        <VStack w={'100%'} as={'form'} onSubmit={handleSubmitSearch(SubmitSearch)}>
          <HStack w={'100%'} justifyContent={'end'}>
            <InputGroup bgColor={'#FFFFFD80'} w={'570px'} height={'56px'} borderRadius={'20px'} sx={{
              borderImageSource:
                "linear-gradient(215.88deg, #FFFFFF -9.34%, rgba(255, 255, 255, 0.2) 26.78%, rgba(255, 255, 255, 0.1) 68.46%, #FFFFFF 106.25%)",
              borderImageSlice: 1,
              boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
              backdropFilter: "blur(7px)",
              background: "rgba(255, 255, 255, 0.05)", // light glass effect
            }} >
              <Input height={'100%'} borderRadius={'20px'} {...registerSearch('content')} />
              <InputRightElement height={'100%'} ml={'10px'}>
                <IoSearch color='gray' fontSize={'22px'} onClick={e => handleSearchButton()} cursor={'pointer'} />
              </InputRightElement>
            </InputGroup>
          </HStack>
          <HStack w={'100%'} justifyContent={'space-between'}>
            <VStack w={'100%'} alignItems={'start'}>
              <HStack w={'100%'} justifyContent={'start'}>
                <Text fontSize={'30px'} color={'#153F45'}>{dataSearch?.data?.data?.total_count} نتیجه برای :</Text>
                <Text fontSize={'30px'} fontWeight={'bold'} color={'#153F45'}>{searchContent}</Text>
              </HStack>
              {/* <Text fontSize={'20px'} color={'#1D6687'}>#مترادف</Text> */}
            </VStack>
            <Menu>
              <MenuButton as={Button} bgColor={'#FFFFFFBF'} color={'#153F45'} borderRadius={'15px'} width={'142px'} height={'56px'} leftIcon={<Image src='./startsearch.png' height={'20px'} />} sx={{
                boxShadow: "0px 1px 4px 0px #0000000D",
              }}>معنایی</MenuButton>
              <MenuList>
                <MenuItem onClick={e => handleSearchType('semantic_bge')} icon={filters?.type == 'semantic_bge' && <IoIosCheckmark fontSize={'22px'} />}>معنایی Bge</MenuItem>
                <MenuItem onClick={e => handleSearchType('semantic_fathi')} icon={filters?.type == 'semantic_fathi' && <IoIosCheckmark fontSize={'22px'} />}>معنای Fathi</MenuItem>
              </MenuList>
            </Menu>

            <Button
              bgColor={'#FFFFFFBF'}
              // bgColor={'#29D3D9'}
              color={'#153F45'} borderRadius={'15px'} width={'142px'} height={'56px'} leftIcon={<GoCopy />} sx={{
                boxShadow: "0px 1px 4px 0px #0000000D",
              }}>مترادف</Button>
            <Button bgColor={'#FFFFFFBF'} color={'#153F45'} borderRadius={'15px'} width={'142px'} height={'56px'} sx={{
              boxShadow: "0px 1px 4px 0px #0000000D",
            }}>عین عبارت</Button>
            <Button bgColor={'#FFFFFFBF'} color={'#153F45'} borderRadius={'15px'} width={'142px'} height={'56px'} sx={{
              boxShadow: "0px 1px 4px 0px #0000000D",
            }}>نوع</Button>
          </HStack>
        </VStack>

        <VStack w={'100%'} gap={'30px'} >
          {isMutatingSearch ? <Spinner /> :
            dataSearch?.data?.data?.contents?.map((item) => (
              <Box w={'100%'} position={'relative'} bgColor={'#FFFFFD80'} padding={'17px'} as={VStack} alignItems={'start'} gap={'15px'} sx={{
                borderImageSource:
                  "linear-gradient(215.88deg, #FFFFFF -9.34%, rgba(255, 255, 255, 0) 26.78%, rgba(255, 255, 255, 0) 63.46%, #FFFFFF 106.25%)",
                borderImageSlice: 1,
                backdropFilter: "blur(7px)",
                boxShadow: `
          0px 9px 19px 0px #0000000D,
          0px 34px 34px 0px #0000000A,
          0px 77px 46px 0px #00000008,
          0px 138px 55px 0px #00000003,
          0px 215px 60px 0px #00000000
        `,
                background: "rgba(255, 255, 255, 0.05)", // optional: frosted glass effect
                borderRadius: "12px", // optional: smooth corners
                p: 6, // padding
              }} onClick={e => handleItemClick(item?.volume_id)} cursor={'pointer'}>
                {/* <Text fontSize={'14px'} fontWeight={'bold'} color={'#319CAA'}>حضرت محمد (ص):</Text> */}
                <Text fontSize={'20px'} fontWeight={'bold'} color={'#153F45'}>{item?.clean_text}</Text>
                {/* <Text fontSize={'18px'} fontWeight={'bold'} color={'#787878'}>توحید آن است که برای پروردگارت چیزی را تقوی ممکن ندانی مناجات که برای خودت ممکن می‌دانی.</Text> */}
                <Badge padding={'5px'} borderRadius={'10px'} bgColor={'#C4C2C033'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>
              </Box>
            ))
          }
        </VStack>
      </Box>


      <Modal isOpen={isOpenSimilar} onClose={onCloseSimilar} size={'4xl'} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent overflow="hidden" position="relative" borderRadius={'16px'}>
          <ModalHeader zIndex={99}>حدیثا</ModalHeader>
          <ModalCloseButton zIndex={99} />
          <ModalBody pb="100px" >
            <Box position="absolute" inset={0} zIndex={'-999'}>
              <Image
                src={'/modalhadith1.png'}
                alt="Bottom Left"
                position="absolute"
                left="0"
                bottom={0}
                objectFit="contain"
              />
              <Image
                src={'/modalhadith2.png'} alt="Bottom Right"
                position="absolute"
                right="0"
                bottom={0}
                objectFit="contain"
              />
              <Image
                src="/bggreen.png"
                alt="Top Center"
                position="absolute"
                top="0"
                height={'200px'}
                width={'100%'}
                left="50%"
                zIndex={'-999'}
                transform="translateX(-50%)"
                objectFit="initial"
                sx={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                }}
              />

            </Box>

            {/* Foreground Content */}
            {/* <Box position="relative" zIndex={1} minHeight={'600px'}>
              <HadithCard item={dataSearch?.data?.data?.content?.[selectedHadith]} />
              <Box
                position="fixed"
                bottom="180px"
                left="50%"
                transform="translateX(-50%)"
                w="46%"
                height={'68px'}
                zIndex="sticky"
                py={4}
                px={'16px'}
                borderRadius="16px"
              >
                <HStack w="100%" justifyContent="space-between">
                  <Box
                    position="relative"
                    p="1px"
                    borderRadius="12px"
                    background="linear-gradient(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
                    display="inline-block"
                  >
                    <Box
                      borderRadius="12px"
                      background="white"
                      px="24px"
                      py="12px"
                    >
                      <Button
                        variant="ghost"
                        borderRadius="12px"
                        bg="transparent"
                        _hover={{ bg: 'gray.50' }}
                      >
                        مشابه
                      </Button>
                    </Box>
                  </Box>
                  <Button
                    height="56px"
                    width="109px"
                    leftIcon={<IoDiamond fontSize="20px" />}
                    onClick={onOpenSimilar}
                    boxShadow="0px 8px 20px 0px #0000001A"

                    color="white"
                    bgGradient="linear(268.94deg, #D284FF -0.65%, #4D00FF 104.59%)"
                    _hover={{ bgGradient: 'linear(268.94deg, #c275f1 -0.65%, #3c00cc 104.59%)' }}
                    borderRadius="12px"
                  >
                    کاوش
                  </Button>
                </HStack>

                <HStack
                  w="100%"
                  justifyContent="space-between"
                  border="1px"
                  borderColor="#E0E0E0"
                  height="56px"
                  borderRadius="16px"
                  bgColor="white"
                >
                  <HStack onClick={e => setSelectedHadith(prev => prev - 1)} cursor={'pointer'}>
                    <IconButton icon={<IoIosArrowForward />} colorScheme="gray" variant="ghost" />
                    <Text>حدیث قبل</Text>
                  </HStack>
                  <HStack onClick={e => setSelectedHadith(prev => prev + 1)} cursor={'pointer'}>
                    <Text>حدیث بعد</Text>
                    <IconButton icon={<IoIosArrowBack />} colorScheme="gray" variant="ghost" />
                  </HStack>
                </HStack>
              </Box>
            </Box> */}
          </ModalBody>

        </ModalContent>
      </Modal>

    </Container>
  )
}

export default Search
