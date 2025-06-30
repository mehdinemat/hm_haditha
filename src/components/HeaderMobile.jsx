import { Box, Flex, Text, Button, HStack, IconButton, Menu, MenuList, MenuDivider, MenuItem, MenuButton, VStack, Grid } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdVoiceChat } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const menuList = [
    { title: 'خانه', icon: <GoHome width={'100%'} />, link: '/' },
    { title: 'جستجو', icon: <CiSearch width={'100%'} />, link: '/search' },
    { title: 'کتابخانه', icon: <IoBookOutline width={'100%'} />, link: '/library' },
    { title: 'چت بات', icon: <MdVoiceChat width={'100%'} />, link: '/chatbot' },
]

const HeaderMobile = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const handleLinkClick = (link) => {
        navigate(link)
    }

    function matchesPath(path, link) {
        const input = "/library";
        const regex = new RegExp(`^${link}(\/[^\/]+)?$`);
        return regex.test(path);
    }


    return (
        <Box
            position="fixed"
            bottom="8px"
            left="50%"
            transform="translateX(-50%)"
            w="80%"
            height={'68px'}
            zIndex="sticky"
            bg="white"
            border={'0.3px'}
            boxShadow="0px 4px 15px 0px #0000001A"
            px={'16px'}
            borderRadius="16px"
        >
            <Flex justify="space-between" align="center" height={'100%'}>
                <Grid gap={4} templateColumns={"repeat(4, 1fr)"} w={'100%'}>
                    {
                        menuList?.map((item) => (
                            <VStack
                                onClick={e => handleLinkClick(item?.link)}
                                role="group"
                                bg={matchesPath(location?.pathname, item?.link) ? 'linear-gradient(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)' : "none"}
                                _hover={{
                                    bg: "linear-gradient(102.02deg, #3FD797 10%, #009953 85%)",
                                    color: 'white',
                                }}
                                _active={{
                                    bg: "linear-gradient(102.02deg, #38C68A 10%, #00814B 85%)",
                                }}
                                _focusVisible={{ outline: 'none' }}
                                borderRadius="12px"
                                color={matchesPath(location?.pathname, item?.link) ? 'white' : "black"} // default color
                                cursor={'pointer'}
                                padding={'5px'}
                            >
                                {item?.icon}
                                {item?.title && (
                                    <Text _groupHover={{ color: 'white' }} fontSize={'12px'} color={matchesPath(location?.pathname, item?.link) ? 'white' : "inherit"}>
                                        {item.title}
                                    </Text>
                                )}
                            </VStack>
                        ))
                    }
                </Grid>
            </Flex>
        </Box>
    )
}

export default HeaderMobile
