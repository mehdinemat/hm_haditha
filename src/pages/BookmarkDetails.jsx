import { Badge, Box, Button, Container, Divider, HStack, Icon, IconButton, Image, Input, InputGroup, InputRightAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SearchCard from '../components/Search/SearchCard'
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import HadithCard from '../components/Hadith/HadithCard';
import { IoAdd, IoArrowBack, IoArrowForward, IoDiamond, IoSearch } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../layouts/Home/Header';
import { LuSearchX } from "react-icons/lu";
import { DelimitedArrayParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { GoCopy } from 'react-icons/go';

const BookmarkDetails = () => {

  const [filters, setFilters] = useQueryParams({
    type: withDefault(StringParam, 'exact_'),
    keys: withDefault(DelimitedArrayParam, []),
  })

  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('content');

  const [selectedHadith, setSelectedHadith] = useState('')
  const navigate = useNavigate()

  const { onOpen: onOpenSimilar, onClose: onCloseSimilar, isOpen: isOpenSimilar } = useDisclosure()

  const { data: dataSearch, isLoading: isLoadingSearch } = useSWR(searchQuery && `user/ai/search?content=${filters?.keys?.join(' ') || searchQuery}&search_config=${filters?.type}&size=100&from_=0`)

  useEffect(() => {
    document.title = searchQuery || 'جستجو در احادیث';
  }, [searchQuery]);

  const handleItemClick = () => {
    navigate('/hadith/13')
  }

  return (
    <Container maxW="1150px" padding={0}>

      <Box height={'100vh'} as={VStack} mt={'100px'}>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <HStack>
            <IoArrowForward style={{ color: '#319CAA' }} />
            <Button leftIcon={<IoAdd fontSize={'20px'} />} bgColor={'#319CAA'} height={'32px'} borderRadius={'12px'} mr={'20px'}>دسته‌بندی جدید</Button>
          </HStack>
          <HStack>
            <IconButton icon={<IoArrowForward />} style={{ color: '#319CAA', backgroundColor: '#FFFFFDB2', borderRadius: '10px' }} boxShadow="0px 1px 2px 0px #0000000D,
                 0px 4px 4px 0px #0000000A,
                 0px 8px 5px 0px #00000008,
                 0px 15px 6px 0px #00000003,
                 0px 23px 6px 0px #00000000"
            />
            <IconButton icon={<IoArrowBack />} style={{ color: '#319CAA', backgroundColor: '#FFFFFDB2', borderRadius: '10px' }} boxShadow="0px 1px 2px 0px #0000000D,
                 0px 4px 4px 0px #0000000A,
                 0px 8px 5px 0px #00000008,
                 0px 15px 6px 0px #00000003,
                 0px 23px 6px 0px #00000000"
            />
          </HStack>
        </HStack>
        <HStack w={'100%'} justifyContent={'space-between'} gap={'20px'} my={'20px'}>
          <Box as={HStack} fontSize={'22px'} color={'#153F45'} bgColor={'#F2FFFC99'} boxShadow="0px 3px 6px 0px #0000000D,
                 0px 11px 11px 0px #0000000A,
                 0px 24px 14px 0px #00000008,
                 0px 42px 17px 0px #00000003,
                 0px 66px 18px 0px #00000000"
            backdropFilter="blur(20px)" padding={'20px'} borderRadius={'30px'} w={'100%'} height={'80px'} alignItems={'center'} textAlign={'center'} justifyContent='space-between'>
            <Text>همه احادیث</Text>
            <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'white'} borderRadius={'15px'} w={'44px'} h={'44px'} />
          </Box>
          <Box as={HStack} fontSize={'22px'} color={'#153F45'} bgColor={'#AFFFC1CC'} boxShadow="0px 3px 6px 0px #0000000D,
                 0px 11px 11px 0px #0000000A,
                 0px 24px 14px 0px #00000008,
                 0px 42px 17px 0px #00000003,
                 0px 66px 18px 0px #00000000"
            backdropFilter="blur(20px)" padding={'20px'} borderRadius={'30px'} w={'100%'} height={'80px'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}>
            <Text>احادیث امامت</Text>
            <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'#FFFFFF80'} borderRadius={'15px'} w={'44px'} h={'44px'} />
          </Box>
          <Box as={HStack} fontSize={'22px'} color={'#153F45'} bgColor={'#FCFFF299'} boxShadow="0px 3px 6px 0px #0000000D,
                 0px 11px 11px 0px #0000000A,
                 0px 24px 14px 0px #00000008,
                 0px 42px 17px 0px #00000003,
                 0px 66px 18px 0px #00000000"
            backdropFilter="blur(20px)" padding={'20px'} borderRadius={'30px'} w={'100%'} height={'80px'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}>
            <Text>احادیث معاد</Text>
            <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'#FFFFFF80'} borderRadius={'15px'} w={'44px'} h={'44px'} />
          </Box>
          <Box as={HStack} fontSize={'22px'} color={'#153F45'} bgColor={'#F5F2FF99'} boxShadow="0px 3px 6px 0px #0000000D,
                 0px 11px 11px 0px #0000000A,
                 0px 24px 14px 0px #00000008,
                 0px 42px 17px 0px #00000003,
                 0px 66px 18px 0px #00000000"
            backdropFilter="blur(20px)" padding={'20px'} borderRadius={'30px'} w={'100%'} height={'80px'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}>
            <Text>احادیث جهاد</Text>
            <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'#FFFFFF80'} borderRadius={'15px'} w={'44px'} h={'44px'} />
          </Box>
        </HStack>

        <VStack w={'100%'} gap={'30px'}>
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
          }} onClick={e => handleItemClick()} cursor={'pointer'}>
            <Text fontSize={'14px'} fontWeight={'bold'} color={'#319CAA'}>حضرت محمد (ص):</Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#153F45'}>التَّوْحِيدُ أَنْ لَا تُجَوِّزَ عَلَى رَبِّكَ مَا جَازَ عَلَيْكَ</Text>
            <Text fontSize={'18px'} fontWeight={'bold'} color={'#787878'}>توحید آن است که برای پروردگارت چیزی را تقوی ممکن ندانی مناجات که برای خودت ممکن می‌دانی.</Text>
            <Badge padding={'5px'} borderRadius={'10px'} bgColor={'#C4C2C033'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>
            <IconButton position={'absolute'} left={'20px'} _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'white'} borderRadius={'15px'} w={'25px'} h={'25px'} />
          </Box>
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
          }}>
            <Text fontSize={'14px'} fontWeight={'bold'} color={'#319CAA'}>حضرت محمد (ص):</Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#153F45'}>التَّوْحِيدُ أَنْ لَا تُجَوِّزَ عَلَى رَبِّكَ مَا جَازَ عَلَيْكَ</Text>
            <Text fontSize={'18px'} fontWeight={'bold'} color={'#787878'}>توحید آن است که برای پروردگارت چیزی را تقوی ممکن ندانی مناجات که برای خودت ممکن می‌دانی.</Text>
            <Badge padding={'5px'} borderRadius={'10px'} bgColor={'#C4C2C033'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>
          </Box>
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
          }}>
            <Text fontSize={'14px'} fontWeight={'bold'} color={'#319CAA'}>حضرت محمد (ص):</Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#153F45'}>التَّوْحِيدُ أَنْ لَا تُجَوِّزَ عَلَى رَبِّكَ مَا جَازَ عَلَيْكَ</Text>
            <Text fontSize={'18px'} fontWeight={'bold'} color={'#787878'}>توحید آن است که برای پروردگارت چیزی را تقوی ممکن ندانی مناجات که برای خودت ممکن می‌دانی.</Text>
            <Badge padding={'5px'} borderRadius={'10px'} bgColor={'#C4C2C033'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>
          </Box>

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

export default BookmarkDetails
