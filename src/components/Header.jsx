import { Box, Flex, Text, Button, HStack, IconButton } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";


const menuList = [
  { title: '', icon: <GoHome /> },
  { title: 'جستجو', icon: <CiSearch /> },
  { title: 'کتابخانه', icon: <IoBookOutline /> },
  { title: 'چت بات', icon: <MdVoiceChat /> },
]

const Header = () => {
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
                  _hover={{ bgColor: 'none' , border:'none' }} // prevents its own hover
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
          <IconButton icon={<AiOutlineMenu />} variant={'ghost'} />
          <IconButton icon={<IoBookmarksOutline />} variant={'ghost'} />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
