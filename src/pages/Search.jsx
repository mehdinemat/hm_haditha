import { Box, Button, Container, Divider, HStack, Icon, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import SearchCard from '../components/Search/SearchCard'
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import HadithCard from '../components/Hadith/HadithCard';
import { IoDiamond, IoSearch } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../layouts/Home/Header';
import { LuSearchX } from "react-icons/lu";

const Search = () => {

  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  const [selectedHadith, setSelectedHadith] = useState('')

  const { onOpen: onOpenSimilar, onClose: onCloseSimilar, isOpen: isOpenSimilar } = useDisclosure()

  const { data: dataSearch, isLoading: isLoadingSearch } = useSWR(searchQuery && `user/ai/search?content=${searchQuery}`)


  return (
    <Container maxW="1150px">
      {!searchQuery
        ? <Header />
        : dataSearch?.data?.data?.content?.length == 0
          ? <VStack h={'100%'} alignItems={'center'} justifyContent={'center'} mt={'100px'}>
            <LuSearchX fontSize={'50px'} color='#B4C2CF' />
            <Text>نتیجه‌ای یافت نشد!</Text>
          </VStack>
          : <VStack w={'100%'} alignItems={'start'} my={'16px'}>
            <Text fontSize={'11px'} color={'#B4C2CF'}>نتیجه</Text>
            <VStack mt={'10px'} w={'100%'}>
              {
                dataSearch?.data?.data?.content?.map((item, index) => (
                  <SearchCard item={item} onOpen={onOpenSimilar} setSelectedHadith={setSelectedHadith} index={index} />
                ))
              }
            </VStack>
          </VStack>}


      <Modal isOpen={isOpenSimilar} onClose={onCloseSimilar} size={'4xl'} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent overflow="hidden" position="relative" borderRadius={'16px'}>
          <ModalHeader zIndex={99}>حدیثا</ModalHeader>
          <ModalCloseButton zIndex={99} />
          <ModalBody pb="100px" >
            {/* Background Image Layer */}
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

              <Box as={VStack} w="100%" position="absolute" bottom="-100" right={0} padding="20px">
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

export default Search
