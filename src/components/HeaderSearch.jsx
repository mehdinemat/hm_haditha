import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton, Stack, Container } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoAdd, IoBookOutline } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBox2 from './Search/SearchBox2'

const menuList = [
  { title: '', icon: <GoHome /> },
  { title: 'جستجو', icon: <CiSearch /> },
  { title: 'کتابخانه', icon: <IoBookOutline /> },
  { title: 'چت بات', icon: <MdVoiceChat /> },
]

const HeaderSearch = () => {
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
        height={'68px'}            // ✅ Entire HeaderSearch is 60% wide
        zIndex="sticky"
        bg="white"
        border={'0.3px'}
        boxShadow="0px 4px 15px 0px #0000001A"
        py={4}
        px={'16px'}
        borderRadius="16px"    // optional: rounded corners
      >
        <Flex justify="space-between" align="center" >
          <Flex gap={4} >
            {
              menuList?.map((item) => (
                <HStack
                  role="group"
                  bgColor="none"
                  _hover={{
                    bg: "linear-gradient(102.02deg, #3FD797 10%, #009953 85%)",
                    color: 'white',
                  }}
                  _active={{
                    bg: "linear-gradient(102.02deg, #38C68A 10%, #00814B 85%)",
                  }}
                  borderRadius="12px"
                  color="black" // default color
                  cursor={'pointer'}
                >
                  <IconButton
                    icon={item?.icon}
                    variant="ghost"
                    fontSize="20px"
                    _hover={{ bgColor: 'none', border: 'none' }} // prevents its own hover
                    _groupHover={{ color: 'white' }} // this makes it white when HStack is hovered
                    color="inherit"
                  
                  />
                  {item?.title && (
                    <Text _groupHover={{ color: 'white' }} pl={'5px'} color="inherit">
                      {item.title}
                    </Text>
                  )}
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
            <Button leftIcon={<IoAdd />} height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>معنایی</Button>
            <Button leftIcon={<IoAdd />} height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>نوع</Button>
            <Button leftIcon={<IoAdd />} height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>متفرادف</Button>
            <Button leftIcon={<IoAdd />} height={'56px'} w={'100px'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>عین عبارت</Button>
          </HStack>
        </HStack>
      </Container>
    </Stack >
  )
}

export default HeaderSearch
