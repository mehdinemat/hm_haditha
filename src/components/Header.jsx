import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const menuList = [
  { title: '', icon: <GoHome />, link: '/' },
  { title: 'جستجو', icon: <CiSearch />, link: '/search' },
  { title: 'کتابخانه', icon: <IoBookOutline />, link: '/library' },
  { title: 'چت بات', icon: <MdVoiceChat />, link: '/chatbot' },
]

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const handleLinkClick = (link) => {
    navigate(link)
  }


  return (
    <Box
      position="fixed"
      top="8px"
      left="50%"
      transform="translateX(-50%)"
      w="60%"
      height={'68px'}            // ✅ Entire header is 60% wide
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
  )
}

export default Header
