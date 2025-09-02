import { Box, Button, Center, Container, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW="1150px" padding={0} mb={'200px'} >
    <Center>
    <Box  as={VStack} mt={'200px'} w={'min-content'}>
      <Text fontSize={'28px'} color={'#319CAA'}>خـــوش آمـــدید</Text>
      <Text color={'#153F45'} fontSize={'12px'}>لطفا شماره تماس یا نام‌کاربری خود را وارد کنید.</Text>
      <Input mt={'30px'} bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      <Input bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      <HStack w={'100%'}justifyContent={'space-between'} paddingX={'20px'}>
        <Text color={'#1D6687'} fontSize={'12px'}>+ ایجاد حساب</Text>
        <Text color={'#1D6687'} fontSize={'12px'}>کلمه عبور را فراموش کردم</Text>
      </HStack>
      <Button bgColor={'#319CAA'} w={'100%'} borderRadius={'20px'} h={'47px'} mt={'20px'}>ورود</Button>
    </Box>
    
    </Center>
    </Container>
  )
}

export default Login
