import React from 'react'
import { Badge, Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const Header = () => {
  return (
    <VStack justify="center" align="center" p={8} pt="164px" >
    <Image src="/ai_icon.png" width="196px" height="186px" />
    <HStack mt={'48px'}>
      <Text>کاوش با</Text>
      <Badge bgGradient="linear(270.29deg, #D284FF 8.12%, #4D00FF 109.58%)"
        color="white"
        px={4}
        py={1}
        borderRadius="40px">هوش مصنوعی</Badge>
      <Text>در احادیث اسلامی</Text>
    </HStack>
  </VStack>
  )
}

export default Header
