import { Box, Button, Center, Container, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Register = () => {
  return (
    <Container maxW="1150px" padding={0} mb={'200px'} >
    <Center>
    <Box  as={VStack} mt={'100px'} w={'min-content'}>
      <Text fontSize={'28px'} color={'#319CAA'}>خـــوش آمـــدید</Text>
      <VStack mt={'30px'} w={'100%'} alignItems={'start'}>
        <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'}>نام کاربری</Text>
      <Input  bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      </VStack>
      <VStack  w={'100%'} alignItems={'start'}>
        <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'}>شماره تماس</Text>
      <Input  bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      </VStack>    
      <VStack  w={'100%'} alignItems={'start'}>
        <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'}>کلمه عبور</Text>
      <Input  bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      </VStack>    
       <VStack  w={'100%'} alignItems={'start'}>
        <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'}>تکرار کلمه عبور</Text>
      <Input  bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
        backdropFilter: "blur(7px)",
        boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
      }}/>
      </VStack>
      <HStack w={'100%'}justifyContent={'space-between'} px={'20px'}>
        <Text color={'#1D6687'} fontSize={'12px'}>ورود حساب</Text>
        <Text color={'#1D6687'} fontSize={'12px'}>کلمه عبور را فراموش کردم</Text>
      </HStack>
      <Button bgColor={'#319CAA'} w={'100%'} borderRadius={'20px'} h={'47px'} mt={'20px'}>ایجاد حساب</Button>
    </Box>
    
    </Center>
    </Container>
  )
}

export default Register
