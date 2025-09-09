import {
  Box,
  Button,
  Center,
  Container,
  Text,
  VStack,
  HStack,
  PinInput,
  PinInputField,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import api from '../components/lib/api'
import { useNavigate, useSearchParams } from 'react-router-dom'

const postRequest = (url, { arg: { phone_number, ...data } }) => {
  return api.post(url + `?phone_number=${phone_number}`, data)
}

const postRequest2 = (url, { arg }) => {
  return api.post(url, arg)
}

const VerifyCode = () => {

  const toast = useToast()
  const [searchParams] = useSearchParams()
  const phone_number = searchParams.get('phone_number')
  const navigate = useNavigate()

  const { trigger: triggerGetVerifyCode, isMutating } = useSWRMutation(
    `/user/auth/send-verify-code`, postRequest
  )

  const { trigger: triggerSendVerifyCode, isMutating: isMutatingSendVerifyCode } = useSWRMutation(
    `/user/auth/verify-code`, postRequest2, {
    onSuccess: (data) => {
      if (data?.data?.access_token && data?.status) {
        localStorage.setItem("token", data?.data?.access_token)
        toast({
          title: 'ورود',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate('/')
      }
    }
  }
  )

  const { handleSubmit, setValue } = useForm()

  // Submit handler
  const handleSubmitRegister = (e) => {
    triggerSendVerifyCode({ ...e, phone_number: phone_number })
  }

  useEffect(() => {
    triggerGetVerifyCode({ phone_number: phone_number })
  }, [phone_number])

  return (
    <Container maxW="1150px" padding={0} mb={'200px'}>
      <Center h={'calc(100vh - 250px)'}>
        <form onSubmit={handleSubmit(handleSubmitRegister)}>
          <Box as={VStack} mt={'100px'} w={'min-content'}>
            <Text fontSize={'28px'} color={'#319CAA'}>
              کد تایید را وارد کنید
            </Text>

            {/* Pin Input */}
            <HStack mt="20px" dir='ltr'>
              <PinInput
                otp
                onChange={(value) => setValue('code', value)} // save value to react-hook-form
              >
                <PinInputField width={'55px'} height={'55px'} sx={{
                  backdropFilter: "blur(7px)",
                  boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
                }} />
                <PinInputField width={'55px'} height={'55px'} sx={{
                  backdropFilter: "blur(7px)",
                  boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
                }} />
                <PinInputField width={'55px'} height={'55px'} sx={{
                  backdropFilter: "blur(7px)",
                  boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
                }} />
                <PinInputField width={'55px'} height={'55px'} sx={{
                  backdropFilter: "blur(7px)",
                  boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
                }} />
                <PinInputField width={'55px'} height={'55px'} sx={{
                  backdropFilter: "blur(7px)",
                  boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
                }} />
              </PinInput>
            </HStack>

            {/* Hidden input for react-hook-form */}

            <Button
              bgColor={'#319CAA'}
              w={'100%'}
              borderRadius={'20px'}
              h={'47px'}
              mt={'20px'}
              type="submit"
              isLoading={isMutating}
            >
              ایجاد حساب
            </Button>
          </Box>
        </form>
      </Center>
    </Container>
  )
}

export default VerifyCode
