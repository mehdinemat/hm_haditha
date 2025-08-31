import { Badge, Box, Button, Container, Divider, Grid, HStack, Icon, IconButton, Image, Input, InputGroup, InputRightAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
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


const bookmarkTitles = [
  { title: 'همه احادیث', details: '534 حدیث', bgcolor: '#F2FFFC99' },
  { title: 'احادیث معاد', details: '128 حدیث', bgcolor: '#FCFFF299' },
  { title: 'احادیث امامت', details: '128 حدیث', bgcolor: '#F2FFF599' },
  { title: 'احادیث جهاد', details: '128 حدیث', bgcolor: '#F5F2FF99' },
  { title: 'احادیث معاد', details: '128 حدیث', bgcolor: '#FCFFF299' },
  { title: 'احادیث امامت', details: '128 حدیث', bgcolor: '#F2FFF599' },
  { title: 'احادیث جهاد', details: '128 حدیث', bgcolor: '#F5F2FF99' },
]


const Bookmarks = () => {

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
        <HStack w={'100%'} justifyContent={'space-between'} mt={'20px'}>
          <HStack>
            <Button leftIcon={<IoAdd fontSize={'20px'} />} bgColor={'#319CAA'} height={'32px'} borderRadius={'12px'} mr={'20px'}>دسته‌بندی جدید</Button>
          </HStack>
        </HStack>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} w={'100%'} my={'20px'}>
          {
            bookmarkTitles?.map((item) => (
              <Box as={VStack} fontSize={'22px'} color={'#153F45'} bgColor={item?.bgcolor} boxShadow="0px 3px 6px 0px #0000000D,
                 0px 11px 11px 0px #0000000A,
                 0px 24px 14px 0px #00000008,
                 0px 42px 17px 0px #00000003,
                 0px 66px 18px 0px #00000000"
                backdropFilter="blur(20px)" padding={'20px'} borderRadius={'30px'} w={'100%'} height={'172px'} alignItems={'start'} textAlign={'center'} justifyContent='space-between' gap={0}>
                <VStack w={'100%'} gap={0} alignItems={'start'}>
                  <Text fontSize={'22px'} color={'#153F45'} fontWeight={'extrabold'}>{item?.title}</Text>
                <Text fontSize={'16px'} color={'#153F45'}>{item?.details}</Text>
                </VStack>
                <HStack w={'100%'} justifyContent={'end'}>
                  <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'22px'} />} color={'#1D6687'} mr={'0px'} variant={'ghost'} bgColor={'white'} borderRadius={'15px'} w={'44px'} h={'44px'} />
                </HStack>
              </Box>
            ))
          }

        </Grid>

      </Box>

    </Container>
  )
}

export default Bookmarks
