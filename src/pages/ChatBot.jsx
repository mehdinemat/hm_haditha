import { Box, Button, Card, Center, Container, Divider, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react'
import { IoAdd, IoCloudUpload } from 'react-icons/io5'
import { IoIosSend } from "react-icons/io";
import { LuTextSelect } from "react-icons/lu";
import { LuNotepadTextDashed } from "react-icons/lu";
import { FaLayerGroup } from "react-icons/fa6";
import { HiHashtag } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const ChatBot = () => {

    const { data, isLoading } = useSWR(`user/chat/session`)

    const navigate = useNavigate()

    const handleCilckStartConv = () => {
        navigate(`/chatbot/0`)
    }

    return (
        <Container maxW="672px">
            <VStack justify="center" align="center" p={8} pt={{ base: '30px', md: "164px" }} height={'calc( 100vh - 60px )'} gap={'12px'}>

                <Center w={'100%'} position={'relative'}>
                    <Textarea bgColor={'white'} zIndex={99} borderRadius={'12px'} height={'120px'}></Textarea>
                    <IconButton icon={<IoIosSend />} colorScheme='gray' position={'absolute'} left={'12px'} top={'12px'} borderRadius={'50%'} zIndex={999} onClick={e => handleCilckStartConv()} />
                </Center>
                <HStack gap={'8px'} w={'100%'} alignItems={'start'}>
                    <Button variant={'outline'} borderRadius={'8px'} leftIcon={<LuTextSelect />} colorScheme='teal' fontSize={'11px'} >تشخیص موجودیت</Button>
                    <Button variant={'outline'} borderRadius={'8px'} leftIcon={<LuNotepadTextDashed />} fontSize={'11px'}>خلاصه سازی</Button>
                    <Button variant={'outline'} borderRadius={'8px'} leftIcon={<FaLayerGroup />} fontSize={'11px'}>دسته بندی</Button>
                    <Button variant={'outline'} borderRadius={'8px'} leftIcon={<HiHashtag />} fontSize={'11px'}>کلمات کلیدی</Button>
                </HStack>
            </VStack>

        </Container>
    )
}

export default ChatBot
