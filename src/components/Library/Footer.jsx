import { Box, Flex, HStack, IconButton, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoArrowBack, IoArrowForward, IoBookmarksOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom="8px"
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

        <HStack w={'100%'} justifyContent={'space-between'}>
          <HStack>
            <IconButton icon={<IoIosArrowForward />} colorScheme='gray' variant={'ghost'} />
            <Text>صفحه قبل</Text>
          </HStack>
          <HStack>
            <Text color={'#8A92A8'}>358</Text>
            <Text color={'#8A92A8'}>/</Text>
            <Input h={'36px'} w={'36px'} />
          </HStack>
          <HStack>
            <Text>صفحه بعد</Text>
            <IconButton icon={<IoIosArrowBack />} colorScheme='gray' variant={'ghost'} />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
