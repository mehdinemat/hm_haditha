import { Badge, Box, Button, Container, Divider, HStack, Icon, IconButton, Image, Input, InputGroup, InputRightAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchCard from '../components/Search/SearchCard'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import HadithCard from '../components/Hadith/HadithCard';
import { IoArrowBack, IoArrowForward, IoBookmark, IoBookmarkOutline, IoDiamond, IoOpenOutline, IoSearch } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../layouts/Home/Header';
import { LuSearchX } from "react-icons/lu";
import { DelimitedArrayParam, NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { GoCopy } from 'react-icons/go';
import useSWRMutation from 'swr/mutation';
import api from '../components/lib/api';

const getRequest = (url, { arg }) => {
  return api.get(url)
}

const HadithDetails = () => {

  const [filters, setFilters] = useQueryParams({
    type: withDefault(StringParam, 'exact_'),
    keys: withDefault(DelimitedArrayParam, []),
    page: withDefault(NumberParam, 100)
  })
  const param = useParams()
  const location = useLocation();

  const { trigger: triggerContent, isMutating: isMutatingContent, data: dataContent } = useSWRMutation(param?.id && `/user/volume/${param?.id}/content?page=${filters?.page}`, getRequest)

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('content');

  const [selectedHadith, setSelectedHadith] = useState('')
  const navigate = useNavigate()

  const { onOpen: onOpenSimilar, onClose: onCloseSimilar, isOpen: isOpenSimilar } = useDisclosure()

  const { data: dataSearch, isLoading: isLoadingSearch } = useSWR(searchQuery && `user/ai/search?content=${filters?.keys?.join(' ') || searchQuery}&search_config=${filters?.type}&size=100&from_=0`)

  useEffect(() => {
    console.log(dataContent?.data?.data)
  }, [dataContent]);

  useEffect(() => {
    triggerContent()
  }, [param?.id, filters?.page])

  const handleItemClick = () => {
    navigate('/hadith/13')
  }
  const handlePageNext = () => {
    setFilters({ page: filters?.page + 1 })
  }

  const handlePageBack = () => {
    setFilters({ page: filters?.page - 1 })
  }

  return (
    <Container maxW="1150px" padding={0}>

      <Box height={'100vh'} as={VStack} mt={'100px'}>

        <HStack w={'100%'} height={'55px'} justifyContent={'space-between'} bgColor={'#FFFFFD80'} sx={{
          borderImageSource:
            "linear-gradient(215.88deg, #FFFFFF -9.34%, rgba(255, 255, 255, 0) 26.78%, rgba(255, 255, 255, 0) 63.46%, #FFFFFF 106.25%)",
          borderImageSlice: 1,
          backdropFilter: "blur(100px)",
          boxShadow: `
          0px 10px 22px 0px #0000000D,
          0px 39px 39px 0px #0000000A,
          0px 88px 53px 0px #00000008,
          0px 157px 63px 0px #00000003,
          0px 246px 69px 0px #00000000
        `,
          background: "rgba(255, 255, 255, 0.05)", // frosted effect
          borderRadius: "16px", // optional: rounded corners
          p: 2, // padding
        }} mb={'20px'}>
          <HStack>
            <IoArrowForward style={{ color: '#319CAA' }} cursor={'pointer'} onClick={e => navigate('/search')} />
            <Button bgColor={'#C4C2C066'} color={'#153F45'} borderRadius={'12px'} width={'142px'} height={'40px'} leftIcon={<Image src='/startsearch.png' height={'20px'} />} sx={{
              boxShadow: "0px 1px 4px 0px #0000000D",
            }} mr={'40px'}>کاوش</Button>
            <Button bgColor={'#C4C2C066'} color={'#153F45'} borderRadius={'12px'} width={'142px'} height={'40px'} leftIcon={<GoCopy />} sx={{
              boxShadow: "0px 1px 4px 0px #0000000D",
            }}>مشابه</Button>
          </HStack>
          <HStack>
            <IoArrowForward style={{ backgroundColor: 'white', borderRadius: '10px' }} onClick={e => handlePageBack()} cursor={'pointer'} />
            <Text>حدیث {filters?.page}</Text>
            <IoArrowBack style={{ backgroundColor: 'white', borderRadius: '10px' }} onClick={e => handlePageNext()} cursor={'pointer'} />
          </HStack>
          <HStack gap={'20px'} color={'#153F45'}>
            <HStack gap={2}>
              <IoBookmarkOutline />
              <Text color={'#153F45'}>ذخیره</Text>
            </HStack>
            <HStack gap={2}>
              <GoCopy />
              <Text color={'#153F45'}>کپی</Text>
            </HStack>
            <HStack gap={2}>
              <IoOpenOutline />
              <Text color={'#153F45'}>اشتراک گذاری</Text>
            </HStack>
          </HStack>
        </HStack>

        {
          dataContent?.data?.data?.contents?.map((item) => (
            <VStack w={'100%'} gap={'4px'} alignItems={'start'} mt={'5px'}>
              <HStack w={'100%'} justifyContent={'space-between'}>
                {/* <Text fontSize={'14px'} fontWeight={'bold'} color={'#319CAA'}>حضرت محمد (ص):</Text>
                <Badge padding={'5px'} borderRadius={'10px'} bgColor={'#C4C2C033'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge> */}
              </HStack>
              {/* <Text fontSize={'20px'} fontWeight={'bold'} color={'#153F45'}>التَّوْحِيدُ أَنْ لَا تُجَوِّزَ عَلَى رَبِّكَ مَا جَازَ عَلَيْكَ</Text> */}
              <Text fontSize={'18px'} fontWeight={'bold'} color={'#787878'}>{item?.clean_text}</Text>

            </VStack>
          ))
        }

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
            <Box position="relative" zIndex={1} minHeight={'600px'}>
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
            </Box>
          </ModalBody>

        </ModalContent>
      </Modal>

    </Container>
  )
}

export default HadithDetails
