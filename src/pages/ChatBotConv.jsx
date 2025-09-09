import { Avatar, Box, Button, Card, Center, Container, Divider, HStack, Icon, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react'
import { IoAdd, IoArrowBack, IoCloudUpload, IoCode, IoCopy, IoEllipsisHorizontal, IoStar } from 'react-icons/io5'
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import { LuTextSelect } from "react-icons/lu";
import { LuNotepadTextDashed } from "react-icons/lu";
import { FaArrowUpRightFromSquare, FaLayerGroup } from "react-icons/fa6";
import { HiHashtag } from "react-icons/hi2";
import ChatBot from './ChatBot';
import ChatBotInput from '../components/Home/ChatBotInput'
import { PiSpeakerSimpleLowLight } from 'react-icons/pi';
import { AiOutlineDislike, AiOutlineFileSearch, AiOutlineLike } from 'react-icons/ai';
import { RxCopy } from 'react-icons/rx';
import { CiFolderOn } from 'react-icons/ci';
import { GoHistory } from 'react-icons/go';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import api from '../components/lib/api';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';


const postRequest = (url, { arg: { id, ...data } }) => {
  return api.post(url + (id ? `${id}` : ''), data)
}


const ChatBotConv = () => {


  const [filters, setFilters] = useQueryParams({
    chat: withDefault(StringParam, '')
  })

  const { data: dataSession, isLoading: isLoadingSession } = useSWR(`user/chat/session`)

  const { data: dataChat, isLoading: isLoadingChat } = useSWR(filters?.chat && `/user/chat/${filters?.chat}`)

  const { trigger: triggerChat, isMutating: isMutatingChat } = useSWRMutation(`/user/chat/`, postRequest)

  const { trigger: triggerNewChat } = useSWRMutation(`/user/chat/session`, postRequest, {
    onSuccess: (data) => {
      console.log(data?.data?.data?.session_id)
      // triggerNewChat({data})
    }
  })

  const { trigger: triggerNewSession } = useSWRMutation(`/user/chat/session`, postRequest)

  const handleCreateNewChat = () => {
    triggerNewChat()
  }

  const chatList = [
    { title: 'new_conv', label: 'گفتگوی جدید', icon: IoAdd, function: handleCreateNewChat },
    { title: 'explore', label: 'کاوش', icon: AiOutlineFileSearch },
    { title: 'files', label: 'فایل ها', icon: CiFolderOn },
  ]

  const handleSelectChat = (id) => {
    setFilters({ chat: id })
    console.log(id)
  }

  const SubmitChat = (content) => {
    triggerChat({ content, id: filters?.chat })
  }

  return (
    <Container maxW="1200px" px={'30px'}>
      <HStack w={'100%'} gap={'140px'}>
        <VStack w={'170px'} mt={'80px'} height={'calc( 100vh - 150px )'} mb={'30px'} alignItems={'start'} py={8}>
          {
            chatList?.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                justifyContent="flex-start"
                leftIcon={<Icon as={item.icon} />}
                onClick={item?.function}
                bgColor={'#FFFFFD80'}
                w={'100%'}
                borderRadius="12px"
                minH={'32px'}
                sx={{
                  boxShadow: `
          0px 1px 1px 0px #0000000D,
          0px 2px 2px 0px #0000000A,
          0px 5px 3px 0px #00000008,
          0px 10px 4px 0px #00000003,
          0px 15px 4px 0px #00000000
        `,
                }}
              >
                <Text>{item.label}</Text>
              </Button>
            ))
          }
          <Box as={VStack} w={'100%'} mt={'24px'} height={'100%'} bg="whiteAlpha.200"
            sx={{
              boxShadow: `
          0px 6px 13px 0px #7878780D,
          0px 24px 24px 0px #7878780A,
          0px 53px 32px 0px #78787808,
          0px 94px 38px 0px #78787803,
          0px 147px 41px 0px #78787800
        `,
              backdropFilter: "blur(7px)",
            }} borderRadius={'12px'} p={'15px'}>
            <HStack w={'100%'}>
              <GoHistory color={'#153F4566'} />
              <Text color={'#153F4566'} fontSize={'11px'}>تاریخچه گفتگوها</Text>
            </HStack>
            {
              dataSession?.data?.chat_sessions?.map((item) => (
                <HStack w={'100%'} justifyContent={'space-between'} mt={'10px'} cursor={'pointer'} onClick={e => handleSelectChat(item?.id)} bgColor={filters?.chat == item?.id ? 'gray.200' : 'none'} padding={'5px'} borderRadius={'10px'}>
                  <Text fontSize={'11px'} color={'#153F45'}>{item?.title || 'بدون عنوان'}</Text>
                  <IoEllipsisHorizontal color={'#153F45'} />
                </HStack>
              ))
            }

          </Box>
          <Button
            mt={'27px'}
            height={'54px'}
            padding={'12px'}
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<Avatar height={'30px'} width={'30px'} />}
            bgColor={'#FFFFFD80'}
            w={'100%'}
            borderRadius="12px"
            sx={{
              boxShadow: `
          0px 1px 1px 0px #0000000D,
          0px 2px 2px 0px #0000000A,
          0px 5px 3px 0px #00000008,
          0px 10px 4px 0px #00000003,
          0px 15px 4px 0px #00000000
        `,
            }}
          >
            <Text fontSize={'11px'}>محمدعلی نوریزاده</Text>
            <IoIosArrowBack />
          </Button>
        </VStack >
        <VStack justify="center" align="end" p={8} mt={'80px'} mb={'30px'} height={'calc( 100vh - 150px )'} gap={'12px'} alignItems={'start'} w={'600px'}   >
          <Box as={VStack} bgColor={'#FFFFFD80'} sx={{
            borderImageSource:
              "linear-gradient(215.88deg, #FFFFFF -9.34%, rgba(255, 255, 255, 0) 26.78%, rgba(255, 255, 255, 0) 63.46%, #FFFFFF 106.25%)",
            borderImageSlice: 1,
          }} boxShadow="0px 4px 4px 0px #00000040" height={'100%'} px={'20px'} w={'100%'} borderRadius={'10px'}>
            <HStack mb={'0px'} mt={'5px'}>
              <IconButton icon={<FaArrowUpRightFromSquare />} variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
              <IconButton icon={<PiSpeakerSimpleLowLight />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
              <IconButton icon={<AiOutlineDislike />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
              <IconButton icon={<AiOutlineLike />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
              <IconButton icon={<RxCopy />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
            </HStack>

            <Box id='user' border={'.3px'} bgColor={'#DDDDDD'} px={'18px'} py={'8px'} borderRadius={'20px'} borderBottomRightRadius={'0px'}
              w={'auto'} maxW={'340px'} alignSelf="flex-start">
              <Text fontSize={'13px'} fontWeight={'400'}
              >
                عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ: قَالَ أَبُو عَبْدِ اللَّهِ (عَلَيْهِ السَّلَامُ):
                إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّةَ
                این حدیث را لطفا خلاصه ترجمه کن
              </Text>
            </Box>
            <Box id='bot' alignSelf="flex-end" mt={'15px'}>
              <HStack >
                <Text fontSize={'14px'} w={'340px'}>خلاصه . شناخت، سبب پذیرش او می‌شود، پذیرش باعث امان‌یافتن او می‌شود، و این امان یافتن، در نهایت او را به بهشت می‌رساند.</Text>
              </HStack>
              <HStack mb={'0px'} mt={'5px'}>
                <IconButton icon={<FaArrowUpRightFromSquare />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
                <IconButton icon={<PiSpeakerSimpleLowLight />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
                <IconButton icon={<AiOutlineDislike />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
                <IconButton icon={<AiOutlineLike />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
                <IconButton icon={<RxCopy />} colorScheme='gray' variant={'ghost'} color={'#153F45'} opacity={'0.7'} />
              </HStack>

            </Box>
            <Box id='user' border={'.3px'} bgColor={'#DDDDDD'} px={'18px'} py={'8px'} borderRadius={'20px'} borderBottomRightRadius={'0px'}
              w={'auto'} maxW={'340px'} alignSelf="flex-start">
              <Text fontSize={'13px'} fontWeight={'400'}
              >
                ترجمه کن
              </Text>
            </Box>
          </Box>
          <ChatBotInput submit={SubmitChat} />
        </VStack >
      </HStack >
    </Container >
  )
}

export default ChatBotConv
