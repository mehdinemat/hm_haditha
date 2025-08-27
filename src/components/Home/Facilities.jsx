import { Box, Center, Grid, GridItem, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { IoArrowBack } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSend } from "react-icons/vsc";


const BodyBox = () => {
    return (
        <VStack alignItems={'center'} justifyContent={'center'} my={'120px'} w={'100%'} backgroundImage={'./home_h_2.png'} backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat" h={'651px'} bgColor={'#153F45'}>
            <VStack w={'480px'} alignItems={'start'} gap={'0px'}>
                <HStack alignItems={'center'} justifyContent={'center'}>
                    <Image src="./h_star.png" w={'33px'} h={'30px'} />
                    <Text color={'white'} fontSize={'25px'} fontWeight={'bold'}>هوش‌مصنوعی حـدیثا</Text>
                </HStack>
                <HStack mb={'20px'}>
                    <Text color={'#EED9C7'} fontSize={'35px'} fontWeight={'bold'}>چگونه کار می‌کند؟</Text>
                </HStack>
                <HStack >
                    <Text color={'white'} fontSize={'18px'} >حدیثا، پیشرفته‌ترین سامانه هوش مصنوعی در حوزه مفاهیم حدیثی است. این سامانه با تحلیل عمیق متون حدیثی و استفاده از جدیدترین فناوری‌های هوش مصنوعی، امکان دسترسی سریع، دقیق و معنادار به احادیث و مفاهیم اسلامی را فراهم می‌کند.
                        این سرویس با استفاده از تکنولوژی‌های پیشرفته‌ای نظیر پردازش زبان طبیعی (NLP) و جستجوی معنایی، مفاهیم مرتبط را شناسایی کرده و بهترین نتایج را نمایش می‌دهد.</Text>
                </HStack>
                <HStack alignItems={'center'} justifyContent={'start'} mt={'20px'} color={'#D8F3FF'}>
                    <IconButton _hover={{ bgColor: 'none' }} icon={<IoArrowBack style={{ transform: "rotate(145deg)" }} fontSize={'22px'} />} color={'#D8F3FF'} mr={'0px'} variant={'ghost'} />
                    <Text fontSize={'18px'}>اطلاعات بیشتر</Text>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default BodyBox
