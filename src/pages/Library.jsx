import { Button, Container, Divider, Grid, GridItem, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'
import { IoClose, IoEllipsisVerticalCircleSharp, IoSearch } from 'react-icons/io5'
import { IoListSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Footer from '../components/Library/Footer'
const Library = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Container maxW="1150px">
      <VStack w={'100%'} alignItems={'start'} my={'16px'}>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} height={'80vh'} mt={'100px'} w={'100%'}>
          <GridItem w={'100%'}>
            <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem w={'100%'}>
          <Image w={'100px'} h={'150px'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'}/>
          </GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
        </Grid>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />

        <ModalContent>
          <ModalBody>
            <Container maxW="1150px">
              <VStack w={'100%'} alignItems={'start'}>
                <HStack w={'100%'} justifyContent={'space-between'}>
                  <HStack>
                    <IconButton icon={<IoListSharp />} variant={'ghost'} colorScheme='gray' fontSize={'24px'} />
                    <Text bgGradient="linear(268.94deg, #D284FF -0.65%, #4D00FF 104.59%)"
                      bgClip="text"
                      fontWeight="bold">اصول کافی، جلد ۱</Text>
                  </HStack>
                  <HStack>
                    <IconButton icon={<CiSearch />} variant={'ghost'} fontSize={'24px'} colorScheme='gray' />
                    <IconButton icon={<IoClose />} variant={'ghost'} fontSize={'24px'} colorScheme='gray' onClick={onClose} />
                  </HStack>
                </HStack>
              </VStack>
              <Divider mt={'10px'} />
              <Text mt={'50px'} fontSize={'20px'} lineHeight={'40px'} fontWeight={'400'}>عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ: قَالَ أَبُو عَبْدِ اللَّهِ (عَلَيْهِ السَّلَامُ):
                إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّة امام جعفر صادق علیه‌السلام:عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ: قَالَ أَبُو عَبْدِ اللَّهِ إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّةَ

                امام جعفر صادق علیه‌السلام:
                عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ: قَالَ أَبُو عَبْدِ اللَّهِ (عَلَيْهِ السَّلَامُ):
                إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّةَ</Text>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Container maxW="1150px">
              <Footer />
            </Container>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Container>
  )
}

export default Library
