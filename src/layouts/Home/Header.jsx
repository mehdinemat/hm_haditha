import React from 'react'
import { Badge, Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const Header = () => {
  return (
    <VStack justify="center" align="center" p={8} pt={{ base: '30px', md: "164px" }} position={'relative'}>
      <Image src="/logo_2.png" width="218px" height="218px" />
      <Image src="/search_info.png" w={'530px'} />
      <Text w={'560px'} textAlign={'center'} position={'absolute'} top={'470px'} color={'#153F45'} fontSize={'14px'} fontWeight={'light'}>هوش مصنوعی تحلیل‌گر احادیث با بهره‌گیری از پردازش زبان طبیعی و یادگیری ماشین، به شناسایی، دسته‌بندی، و تفسیر دقیق متون حدیثی می‌پردازد.</Text>

    </VStack>
  )
}

export default Header
