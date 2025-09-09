import { Box, Button, Center, Container, HStack, Input, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import api from '../components/lib/api'
import { useNavigate } from 'react-router-dom'

const postRequest = (url, { arg }) => {
  return api.post(url, arg)
}

const Login = () => {

  const toast = useToast()

  const navigate = useNavigate()

  const { register: registerLogin, handleSubmit: handleSubmitLogin } = useForm()

  const { trigger: triggerLogin, isMutating: isMutatingLogin } = useSWRMutation(`/user/auth/login`, postRequest, {
    onSuccess: (data) => {
      toast({
        title: 'ورود',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      localStorage.setItem("token", data?.data?.data?.access_token)
      navigate('/')
    }
  })
  const loginUser = (e) => {
    triggerLogin(e)
  }

  const handleClickLink = (link) => {
    navigate(link)
  }

  return (
    <Container maxW="1150px" padding={0} mb={'200px'} height={'calc( 100vh - 150px )'}>
      <Center>
        <form onSubmit={handleSubmitLogin(loginUser)}>
          <Box as={VStack} mt={'200px'} w={'min-content'}>
            <Text fontSize={'28px'} color={'#319CAA'}>خـــوش آمـــدید</Text>
            <Text color={'#153F45'} fontSize={'12px'}>لطفا شماره تماس یا نام‌کاربری خود را وارد کنید.</Text>
            <VStack w={'100%'} alignItems={'start'}>
              <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'} mt={'30px'}>شماره تماس</Text>
              <Input  bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
                backdropFilter: "blur(7px)",
                boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
              }} {...registerLogin('phone_number')} /></VStack>
            <VStack w={'100%'} alignItems={'start'}>
              <Text fontSize={'14px'} color={'#1D6687'} pr={'20px'}>کلمه عبور</Text>
              <Input bgColor={'#FFFFFD80'} borderRadius={'20px'} w={'384px'} height={'55px'} sx={{
                backdropFilter: "blur(7px)",
                boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
              }} {...registerLogin('password')} />
            </VStack>
            <HStack w={'100%'} justifyContent={'space-between'} paddingX={'20px'}>
              <Text color={'#1D6687'} fontSize={'12px'} onClick={e => handleClickLink('/register')} cursor={'pointer'}>+ ایجاد حساب</Text>
              <Text color={'#1D6687'} fontSize={'12px'}>کلمه عبور را فراموش کردم</Text>
            </HStack>
            <Button bgColor={'#319CAA'} w={'100%'} borderRadius={'20px'} h={'47px'} mt={'20px'} type='submit'>ورود</Button>
          </Box>
        </form>

      </Center>
    </Container>
  )
}

export default Login
