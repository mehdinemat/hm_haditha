import { Box, Flex, Text, Button, HStack, IconButton, VStack, Container } from '@chakra-ui/react'
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
        <HStack alignItems={'center'} h={'48px'} bgColor={'#1B2132'} gap={0} w={'100%'} justifyContent={'space-between'}>
            <Container as={HStack} maxW="container.xl" justifyContent={'space-between'}>
                <Text color={'white'} fontWeight={'300'} fontSize={'13px'}>© تمام حقوق اين وب‌سايت نیز برای مؤسسه هوش مصنوعی و تمدن اسلامی (همتا) است.</Text>
                <Text color={'white'} fontWeight={'300'} fontSize={'13px'}>طراحی شده توسط استودیو نیوا</Text>
            </Container>
        </HStack>
    )
}

export default Header
