import { Box, Center, Flex, Grid, GridItem, Heading, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { MdKeyboardArrowDown } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
    {
        url: "/image.png",
        title: "حجت‌الاسلام خسروپناه",
        subTitle: "پژوهشگر",
        caption: "این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است. این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است.",
    },
    {
        url: "/image.png",
        title: "حجت‌الاسلام خسروپناه",
        subTitle: "پژوهشگر",
        caption: "این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است. این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است.",
    },
    {
        url: "/image.png",
        title: "حجت‌الاسلام خسروپناه",
        subTitle: "پژوهشگر",
        caption: "این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است. این سرویس برای هر کسی که به دنبال احادیث است، ضروری است. با این سرویس، پژوهش‌های من بسیار ساده‌تر شده است.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
};


const Exprience = () => {

    const bg = useColorModeValue("gray.50", "gray.800");


    return (
        <VStack alignItems={'center'} mt={'120px'} w={'100%'} height={'683px'} sx={{
            background: 'linear-gradient(329.16deg, #B9FDE0 13.45%, #EEFFF8 63.57%)',
        }} pt={'96px'}>
            <Text>تجربه شما با حدیثا</Text>
            <Box maxW="800px" mx="auto" mt={10}>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <Box key={index} display="flex !important" justifyContent="center">
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                textAlign="center"
                                p={6}
                            >
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    borderRadius="full"
                                    width="100px"
                                    height="100px"
                                    objectFit="cover"
                                />
                                <Heading fontSize={'16px'} bgGradient="linear(268.92deg, #D284FF 37.62%, #4D00FF 63.24%)"
                                    bgClip="text"
                                    fontWeight="400"
                                    color="transparent">{item.title}</Heading>
                                <Text color={'#626B84'} fontSize={'16px'} fontWeight={'300'} mb={'24px'}>{item?.subTitle}</Text>
                                <Text color="#1B2132" width={'320px'} fontWeight={'300'} fontSize={'16px'}>{item.caption}</Text>
                            </Flex>
                        </Box>
                    ))}
                </Slider>
            </Box>

        </VStack>
    )
}

export default Exprience
