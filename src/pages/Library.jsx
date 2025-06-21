import { Box, Button, Container, Divider, Grid, GridItem, Heading, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SearchCard from '../components/Search/SearchCard'
import { IoClose, IoEllipsisVerticalCircleSharp, IoSearch } from 'react-icons/io5'
import { IoListSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Footer from '../components/Library/Footer'
import api from '../components/lib/api'
import useSWR from 'swr';
import { BooleanParam, NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useNavigate, useParams } from 'react-router-dom';

function parseXML(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const H = xmlDoc.getElementsByTagName('H')[0];
  const num = H.getAttribute('Num');
  const on = H.getElementsByTagName('ON')[0]?.textContent;
  const t = H.getElementsByTagName('T')[0]?.textContent;
  const foot = H.getElementsByTagName('FOOT')[0]?.textContent;

  const text = H.textContent;

  return { num, on, t, foot, fullText: text };
}


const Library = () => {

  const [filters, setFilters] = useQueryParams({
    book_id: withDefault(StringParam, ''),
    page: withDefault(NumberParam, 1)
  })

  const { id } = useParams();
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: dataLibrary, isLoading: isLoadingLibrary } = useSWR(`user/book`)
  const { data: dataBookContent, isLoading: isLoadingLibraryContent } = useSWR((filters?.book_id || id) && `user/book/${filters?.book_id || id}/content?size=1&page=${filters?.page}`)
  // const { num, on, t, foot, fullText } = parseXML(dataBookContent?.data?.hits?.[9]?.xml || '');

  useEffect(() => {
    if(id){
      onOpen()
    }
  }, [id])

  return (
    <Container maxW="1150px">
      <VStack w={'100%'} alignItems={'start'} my={'16px'}>
        <Grid templateColumns='repeat(5, 1fr)' gap={'40px'} height={'80vh'} mt={'100px'} w={'100%'}>
          {
            dataLibrary?.data?.hits?.map((item) => (
              <GridItem w={'100%'} onClick={e => navigate(`/library/${item?.id}`)}>
                <Image src='/kafi.webp' maxW={'100%'} h={'auto'} onClick={onOpen} bgColor={'#D9D9D9'} cursor={'pointer'} />
                <Text>{item?.book_title}</Text>
                <Text fontSize={'xs'}>جلد {item?.vol_num}</Text>
              </GridItem>
            ))
          }
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
              {/* <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading size="md" mb={2}>
                  Reference Number: {num}
                </Heading>

                <Text fontWeight="bold" mb={2}>
                  Source: {on}
                </Text>

                <Text mb={2}>{t}</Text>

                <Divider my={2} />

                <Text fontStyle="italic" color="gray.600" mb={2}>
                  Footnote: {foot}
                </Text>

                <Divider my={2} />

                <Text whiteSpace="pre-wrap">{fullText}</Text>
              </Box> */}
              {isLoadingLibraryContent ? <Spinner /> : <Text mt={'50px'} fontSize={'20px'} lineHeight={'40px'} fontWeight={'400'}>{dataBookContent?.data?.hits?.[0]?.content}</Text>}
            </Container>
          </ModalBody>
          <ModalFooter>
            <Container maxW="1150px">
              <Footer total={dataBookContent?.data?.total?.value} page={filters?.page} setFilters={setFilters} />
            </Container>

          </ModalFooter>
        </ModalContent>
      </Modal>

    </Container>
  )
}

export default Library
