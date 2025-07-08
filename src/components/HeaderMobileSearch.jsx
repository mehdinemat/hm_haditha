import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton, Stack, Container, VStack, Grid } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoAdd, IoBookOutline, IoDiamond } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBox2 from './Search/SearchBox2'
import { useLocation, useNavigate } from 'react-router-dom';

const menuList = [
  { title: 'خانه', icon: <GoHome />, link: '/' },
  { title: 'جستجو', icon: <CiSearch />, link: '/search' },
  { title: 'کتابخانه', icon: <IoBookOutline />, link: '/library' },
  { title: 'چت بات', icon: <MdVoiceChat />, link: '/chatbot' },
]
const HeaderSearch = () => {


  const navigate = useNavigate()
  const location = useLocation()
  const handleLinkClick = (link) => {
    navigate(link)
  }

  return (
    <Stack w={'100%'} height={{ base: '160px', md: '180px' }}
      backgroundImage="url('/bg-search.png')"
      backgroundRepeat="round"
      backgroundSize="cover"
      sx={{
        borderBottom: '0.5px solid',
        borderImageSource: 'linear-gradient(90deg, #76FFDA 0%, #3FC9FA 100%)',
        borderImageSlice: 1,
      }}
    >

      <Box
        position="fixed"
        bottom="8px"
        left="50%"
        transform="translateX(-50%)"
        w="80%"
        height={'68px'}            // ✅ Entire HeaderSearch is 60% wide
        zIndex="sticky"
        bg="white"
        border={'0.3px'}
        boxShadow="0px 4px 15px 0px #0000001A"
        px={'16px'}
        borderRadius="16px"    // optional: rounded corners
      >
        <Flex justify="space-between" align="center" height={'100%'}>
          <Grid gap={4} templateColumns={"repeat(4, 1fr)"} w={'100%'}>
            {
              menuList?.map((item) => (
                <VStack
                  onClick={e => handleLinkClick(item?.link)}
                  role="group"
                  bg={location?.pathname == item?.link ? 'linear-gradient(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)' : "none"}
                  _hover={{
                    bg: "linear-gradient(102.02deg, #3FD797 10%, #009953 85%)",
                    color: 'white',
                  }}
                  _active={{
                    bg: "linear-gradient(102.02deg, #38C68A 10%, #00814B 85%)",
                  }}
                  borderRadius="12px"
                  color={location?.pathname == item?.link ? 'white' : "black"} // default color
                  cursor={'pointer'}
                  padding={'5px'}
                >
                  {item?.icon}

                  {item?.title && (
                    <Text _groupHover={{ color: 'white' }} fontSize={'12px'}  color="inherit">
                      {item.title}
                    </Text>
                  )}
                </VStack>
              ))
            }
          </Grid>
          {/* <HStack>
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
          </HStack> */}
        </Flex>
      </Box>
      <Container maxW="1180px" mt={'0px'} >
        <Flex direction={{ base: 'column', md: 'row' }} w={'100%'} alignItems={'start'} justifyContent={'space-between'}>
          <SearchBox2 />
          <HStack mt={{
            base: '10px', md: '74px'
          }} w={'100%'}>
            <Button leftIcon={<IoDiamond />} height={'56px'} w={'100%'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>معنایی</Button>
            <Button height={'56px'} w={'100%'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>نوع</Button>
            <Button height={'56px'} w={'100%'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>مترادف</Button>
            <Button height={'56px'} w={'100%'} bgColor={'white'} color={'#8A92A8'} fontSize={'14px'} border={'1'} borderColor={'#D9D9D9'} borderRadius={'12px'}>عین عبارت</Button>
          </HStack>
        </Flex>
      </Container>
    </Stack >
  )
}

export default HeaderSearch
