import { Box, Button, Card, Container, Divider, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'
import { IoAdd, IoArrowForward, IoDiamond, IoSearch } from 'react-icons/io5'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HadithCard from '../components/Hadith/HadithCard'
import useSWR from 'swr';
const Hadith = () => {

  const { onOpen: onOpenSimilar, onClose: onCloseSimilar, isOpen: isOpenSimilar } = useDisclosure()

  const { data, isLoading } = useSWR(`user/ai/search`)

  return (
    <Container maxW="1150px">
      <VStack border="0.3px solid #E0E0E0"
        boxShadow="0px 8px 20px 0px #0000001A"
        borderRadius="md"
        p={4}
        bg="white" mt={'20px'} w={'100%'} padding={'48px'}>
        <HStack w={'100%'}>
          <HStack w={'100%'} justifyContent={'space-between'} border={'1px'} borderColor={'#E0E0E0'} height={'56px'} borderRadius={'16px'}>
            <HStack>
              <IconButton icon={<IoIosArrowForward />} colorScheme='gray' variant={'ghost'} />
              <Text>حدیث قبل</Text>
            </HStack>
            <HStack>
              <Text>حدیث بعد</Text>
              <IconButton icon={<IoIosArrowBack />} colorScheme='gray' variant={'ghost'} />
            </HStack>
          </HStack>
          <Button height={'56px'} width={'109px'} leftIcon={<IoSearch fontSize={'20px'} />} onClick={onOpenSimilar} color="white"
            sx={{
              background: "linear-gradient(268.94deg, #D284FF -0.65%, #4D00FF 104.59%)",
            }}
            _hover={{
              opacity: 0.9,
            }} borderRadius={'12px'}>مشابه</Button>
        </HStack>
        <HadithCard />
      </VStack>

      <Modal isOpen={isOpenSimilar} onClose={onCloseSimilar} size={'4xl'} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent overflow="hidden" position="relative" borderRadius={'16px'}>
          <ModalHeader zIndex={99}>حدیثا</ModalHeader>
          <ModalCloseButton zIndex={99}/>
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
            <Box position="relative" zIndex={1}>
              <HadithCard />

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
                  <HStack>
                    <IconButton icon={<IoIosArrowForward />} colorScheme="gray" variant="ghost" />
                    <Text>حدیث قبل</Text>
                  </HStack>
                  <HStack>
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

export default Hadith
