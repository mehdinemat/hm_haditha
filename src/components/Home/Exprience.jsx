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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 100000,
};


const Exprience = () => {

    const bg = useColorModeValue("gray.50", "gray.800");


    return (
        <HStack mb={'100px'} alignItems={'center'} mt={'120px'} w={'100%'} height={'426px'} backgroundImage={'./experbg.png'} pt={'0px'} backgroundRepeat="no-repeat" backgroundSize="contain"
            backgroundPosition="bottom" position={'relative'}>
            <Image src="./quran.png" w={'237px'} height={'159px'} position={'absolute'} bottom={'0px'} right={'130px'} />
            <Image src="./light1.png" position={'absolute'} height={'250px'} top={'5px'} right={'300px'} />
            <Image src="./light2.png" position={'absolute'} height={'350px'} top={'5px'} left={'30px'}zIndex={9999} />
            <Text minWw={'400px'} whiteSpace={'nowrap'} fontSize={'35px'} fontWeight={'bold'} color={'white'} mr={'180px'}>تجربه شما</Text>
            <Box maxW="calc( 100% - 340px )" mx="auto" mt={10} mr={'340px'}>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <Box key={index} px="25px"> {/* spacing between slides */}
                            <Box
                                w="464px"
                                height={'248px'}
                                bgColor="#78DDEA80"
                                borderRadius="40px"
                                mx="auto"
                                padding={'40px'}
                            >
                                <Flex
                                    direction="column"
                                    align="end"
                                    w={'100%'}
                                    justify="center"
                                    textAlign="center"
                                >
                                    <Text
                                        color="#FFFFFF"
                                        width="100%"
                                        fontWeight="300"
                                        fontSize="16px"
                                        textAlign={'justify'}
                                        dir="rtl"
                                    >
                                        {item.caption}
                                    </Text>
                                    <HStack w={'100%'} justifyContent={'space-between'} mt={'20px'}>
                                        <HStack>
                                            <VStack w={'100%'} alignItems={'start'} justifyContent={'end'}>
                                                <Text
                                                    fontSize="12px"
                                                    bgClip="text"
                                                    fontWeight="400"
                                                    color="#FFFFFF"

                                                >
                                                    1404 / 04 / 14
                                                </Text>
                                                <Text color="#FFFFFF" fontSize="10px" fontWeight="300" mb="24px">
                                                    12 : 30
                                                </Text>
                                            </VStack>
                                        </HStack>
                                        <HStack alignItems={'start'} gap={0} >
                                            <VStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                                                <Text
                                                    fontSize="12px"
                                                    bgClip="text"
                                                    fontWeight="400"
                                                    color="#FFFFFF"

                                                >
                                                    {item.title}
                                                </Text>
                                                <Text color="#FFFFFF" fontSize="10px" fontWeight="300" mb="24px">
                                                    {item?.subTitle}
                                                </Text>
                                            </VStack>
                                            <Image
                                                src={item.url}
                                                alt={item.title}
                                                borderRadius="full"
                                                width="40px"
                                                height="40px"
                                                objectFit="cover"
                                            />


                                        </HStack>

                                    </HStack>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>


        </HStack>
    )
}

export default Exprience
