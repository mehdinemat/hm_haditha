import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton, Stack, Container, Checkbox, Switch, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoAdd, IoBookOutline, IoDiamond } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBox2 from './Search/SearchBox2'
import { useLocation, useNavigate } from 'react-router-dom';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const menuList = [
  { title: '', icon: <GoHome />, link: '/' },
  { title: 'جستجو', icon: <CiSearch />, link: '/search' },
  { title: 'کتابخانه', icon: <IoBookOutline />, link: '/library' },
  { title: 'چت بات', icon: <MdVoiceChat />, link: '/chatbot' },
]
const HeaderSearch = () => {

  const [enabledKeys, setEnabledKeys] = useState({})
  const [searchKeys, setSearchKeys] = useState('')

  const toggleKey = (key) => {
    setEnabledKeys((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSelect = (key, val) => {
    if (enabledKeys[key]) {
      // Do something with selected val
      setSearchKeys(val)
      setFilters({ q: val })
      console.log('Selected:', val, enabledKeys)
    }
  }

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');
  const { data: dataSearch, isLoading: isLoadingSearch } = useSWR(searchQuery && `user/ai/synonyms?content=${searchKeys || searchQuery || ''}`)


  const handleLinkClick = (link) => {
    navigate(link)
  }

  const [filters, setFilters] = useQueryParams({
    type: withDefault(StringParam, 'exact'),
    q: withDefault(StringParam, ''),
  })

  return (
    <Stack w={'100%'} height={'180px'}
      sx={{
        borderBottom: '0.5px solid',
        borderImageSource: 'linear-gradient(90deg, #76FFDA 0%, #3FC9FA 100%)',
        borderImageSlice: 1,
      }}
    >

      <Box
        position="fixed"
        top="8px"
        left="50%"
        transform="translateX(-50%)"
        w="60%"
        height={'68px'}

        bg="white"
        border={'0.3px'}
        boxShadow="0px 4px 15px 0px #0000001A"
        py={2}
        px={'16px'}
        borderRadius="16px"
      >
        <Flex justify="space-between" align="center" height={'100%'} >
          <Flex gap={4} height={'100%'}>
            {
              menuList?.map((item) => (
                <HStack
                  onClick={e => handleLinkClick(item?.link)}
                  role="group"
                  borderRadius="12px"
                  cursor={'pointer'}
                >
                  <Button leftIcon={item?.icon} iconSpacing={item.title ? '10px' : '0px'} bg={location?.pathname == item?.link ? 'linear-gradient(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)' : "none"}
                    _hover={{
                      bg: "linear-gradient(102.02deg, #3FD797 10%, #009953 85%)",
                      color: 'white',
                      borderColor: 'unset',

                    }}
                    _active={{
                      bg: "linear-gradient(102.02deg, #38C68A 10%, #00814B 85%)",
                    }}
                    _focus={{ outline: 'none' }}
                    _focusVisible={{ outline: 'none' }}
                    color={location?.pathname == item?.link ? 'white' : 'black'}

                  >{item.title}</Button>
                  {/* <IconButton
                               icon={item?.icon}
                               variant="ghost"
                               fontSize="20px"
                               _hover={{
                                 bg: "linear-gradient(102.02deg, #3FD797 10%, #009953 85%)",
                                 color: 'white',
                               }}
                               _focusVisible={{ outline: 'none' }}
                             />
                             {item?.title && (
                               <Text _groupHover={{ color: 'white' }} pl={'5px'} color="inherit">
                                 {item.title}
                               </Text>
                             )} */}
                </HStack>
              ))
            }
          </Flex>
          <HStack>
            <Menu>
              <IconButton as={MenuButton} icon={<AiOutlineMenu />} variant={'ghost'} />

              <MenuList>
                <MenuItem onClick={() => alert("Profile clicked")}>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem color="red.500">Log out</MenuItem>
              </MenuList>
            </Menu>
            <IconButton icon={<IoBookmarksOutline />} variant={'ghost'} />
          </HStack>
        </Flex>
      </Box>
      <Container maxW="1180px" mt={'20px'} >

        <HStack w={'100%'} alignItems={'start'} justifyContent={'space-between'}>
          <SearchBox2 />
          <HStack mt={'74px'}>
            <Button leftIcon={<IoDiamond />} height={'56px'} w={'100px'} bgColor={filters?.type == 'semantic' ? 'green.500' : 'white'} color={filters?.type == 'semantic' ? 'white' : '#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'} onClick={e => setFilters({ type: 'semantic' })} colorScheme='green' _focus={{ outline: 'none' }} _focusVisible={{ boxShadow: 'none' }}>معنایی</Button>
            <Button height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>نوع</Button>

            <Menu>
              <MenuButton
                colorScheme='green'
                
                as={Button}
                _focus={{ outline: 'none' }} _focusVisible={{ boxShadow: 'none' }}
                height={'56px'} w={'100px'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'} bgColor={'white'} color={'#8A92A8'} _active={{color:'white'}}>
                مترادف
              </MenuButton>

              <MenuList padding="10px" maxH="400px" overflowY="auto">
                {
                  Object?.keys(dataSearch?.data || {})?.map((item) => (
                    <VStack key={item} w="100%" align="stretch" spacing={2}>
                      <HStack w="100%" justifyContent="space-between">
                        <Text fontWeight="bold">{item}</Text>
                        <Switch
                          isChecked={!!enabledKeys[item]}
                          onChange={() => toggleKey(item)}
                        />
                      </HStack>

                      <Wrap spacing="8px" w="200px">
                        {
                          dataSearch?.data?.[item]?.map((val) => (
                            <WrapItem key={val}>
                              <Button
                                variant="outline"
                                colorScheme={enabledKeys[item] ? 'gray' : 'gray'}
                                isDisabled={!enabledKeys[item]} // disable if switch is off
                                onClick={() => handleSelect(item, val)}
                              >
                                {val}
                              </Button>
                            </WrapItem>
                          ))
                        }
                      </Wrap>
                    </VStack>
                  ))
                }
              </MenuList>
            </Menu>
            {/* <Button height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>مترادف</Button> */}
            <Button height={'56px'} w={'100px'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'} onClick={e => setFilters({ type: 'exact' })} colorScheme='green' bgColor={filters?.type == 'exact' ? 'green.500' : 'white'} color={filters?.type == 'exact' ? 'white' : '#8A92A8'} _focus={{ outline: 'none' }} _focusVisible={{ boxShadow: 'none' }}>عین عبارت</Button>
          </HStack>
        </HStack>
      </Container>
    </Stack >
  )
}

export default HeaderSearch
