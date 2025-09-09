import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton, Image } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const menuList = [
  { title: 'صفحه اصلی', icon: '/home-22.png', active_icon: '/home-2.png', link: '/' },
  // { title: 'جستجو', icon: './home_2.png', link: '/search' },
  { title: 'چت بات', icon: '/message.png', active_icon: '/message_active.png', link: '/chatbot' },
  { title: 'کتابخانه', icon: '/book.png', active_icon: '/book_active.png', link: '/library' },
]

const menuList2 = [
  { title: '', icon: '/search_normal.png', link: '/search' },
  { title: '', icon: '/save.png', link: '/bookmarks' },
  { title: '', icon: '/logout.png', link: '/login' },
  { title: '', icon: '/menu.png', link: '/' },
]

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const handleLinkClick = (link) => {
    navigate(link)
  }

  function matchesPath(path, link) {
    const input = "/library";
    const regex = new RegExp(`^${link}(\/[^\/]+)?$`);
    return regex.test(path);
  }


  return (
    <Box
      position="fixed"
      top="8px"
      left="50%"
      transform="translateX(-50%)"
      w="60%"
      height={'72px'}            // ✅ Entire header is 60% wide
      zIndex="sticky"
      bg="#FFFFFD80"
      border={'0.3px'}
      boxShadow="0px 4px 15px 0px #0000001A"
      py={2}
      px={'16px'}
      borderRadius="30px"    // optional: rounded corners
    >
      <Flex justify="space-between" align="center" height='100%'>
        <Flex as={HStack} justifyContent={'space-between'} gap={4} w={'100%'} height='100%'>
          <HStack gap={'20px'}>
            <Image src='/logo_h_2.png' height={'58px'} w={'58px'} onClick={e => handleLinkClick('/')} cursor={'pointer'} />
            {
              menuList?.map((item) => (
                <Button
                  bg={location.pathname != item?.link ? '' : "linear-gradient(334.96deg, #29D3D9 -16%, #319CAA 103.19%)"}
                  boxShadow={
                    location.pathname == item?.link
                      ? `1px 1px 3px 0px #0000000D,
         3px 4px 5px 0px #0000000A,
         6px 9px 6px 0px #00000008,
         11px 15px 8px 0px #00000003,
         18px 24px 8px 0px #00000000`
                      : "none"
                  }
                  leftIcon={
                    <Image
                      src={location.pathname != item?.link ? item?.icon : item?.active_icon}  // put your image path here
                      alt="logo"
                      boxSize="20px"
                    />
                  }
                  borderRadius={'12px'}
                  height={'48px'}
                  color={location.pathname != item?.link ? '#153F45' : 'white'}
                  onClick={e => handleLinkClick(item?.link)}
                >
                  {item?.title}
                </Button>
              ))
            }
          </HStack>
          <HStack gap={'20px'}>
            {
              menuList2?.map((item) => (
                <IconButton bgColor={'white'} colorScheme='gray' icon={<Image
                  src={item?.icon}  // put your image path here
                  alt="logo"
                  boxSize="20px"
                />} onClick={e => handleLinkClick(item?.link)} />
              ))
            }
          </HStack>

        </Flex>
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
  )
}

export default Header
