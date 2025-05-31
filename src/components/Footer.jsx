import { Box, Flex, Text, Button, HStack, IconButton } from '@chakra-ui/react'
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
        <Box h={'48px'} bgColor={'#1B2132'}>
            <Text color={'white'} fontWeight={'300'} fontSize={'14px'}>© تمام حقوق اين وب‌سايت نیز برای مؤسسه هوش مصنوعی و تمدن اسلامی (همتا) است.</Text>
            <Text color={'white'}>طراحی شده توسط استودیو نیوا</Text>
        </Box>
    )
}

export default Header
