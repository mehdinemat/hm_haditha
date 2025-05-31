import { Box, Center, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { MdKeyboardArrowDown } from "react-icons/md";


const BodyBox = () => {
    return (
        <VStack alignItems={'center'} my={'120px'} w={'100%'}>
            <Text mb={'32px'}>امکانات حدیثا</Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} width="100%" margin="0 auto" >
                {/* First row */}
                <GridItem height="200px" width="100%" >
                    <VStack alignItems={'center'}>
                        <Image src="/recognize.png" />
                        <Text fontWeight={'600'} fontSize={'16px'} color={'#1B2132'}>تشخیص موجودیت</Text>
                        <Text fontWeight={'300'} fontSize={'14px'} color={'#626B84'} textAlign={'center'}>استخراج و شناسایی موجودیت‌های مرتبط از متن حدیثی (مانند افراد، مکان‌ها، مفاهیم کلیدی یا موضوعات)</Text>

                    </VStack>
                </GridItem>
                <GridItem height="100px" width="100%" >
                    <VStack alignItems={'center'}>
                        <Image src="/summary.png" />
                        <Text fontWeight={'600'} fontSize={'16px'} color={'#1B2132'}>خلاصه سازی</Text>
                        <Text fontWeight={'300'} fontSize={'14px'} color={'#626B84'} textAlign={'center'}>تجمیع نکات کلیدی از احادیث و شروح مختلف </Text>

                    </VStack>
                </GridItem>
                <GridItem height="100px" width="100%" >
                    <VStack alignItems={'center'}>
                        <Image src="/chat.png" />
                        <Text fontWeight={'600'} fontSize={'16px'} color={'#1B2132'}>چت بات هوشمند</Text>
                        <Text fontWeight={'300'} fontSize={'14px'} color={'#626B84'} textAlign={'center'}>امکان تعامل مستقیم با سامانه برای پاسخ به سوالات یا دریافت توضیحات از مفاهیم حدیثی</Text>
                    </VStack>
                </GridItem>

                <GridItem colSpan={3}>
                    <Box display="flex" justifyContent="center" gap={4}>
                        <Box height="100px" width="200px" >
                            <VStack alignItems={'center'}>
                                <Image src="/recog_key.png" />
                                <Text fontWeight={'600'} fontSize={'16px'} color={'#1B2132'}>تشخیص کلمات کلیدی</Text>
                                <Text fontWeight={'300'} fontSize={'14px'} color={'#626B84'} textAlign={'center'}>با تحلیل دقیق متن، کلمات و عبارات کلیدی هر حدیث را شناسایی و ارائه می‌کند</Text>
                            </VStack>
                        </Box>
                        <Box height="100px" width="200px" >
                            <VStack alignItems={'center'}>
                                <Image src="/category.png" />
                                <Text fontWeight={'600'} fontSize={'16px'} color={'#1B2132'}>دسته‌بندی هوشمند</Text>
                                <Text fontWeight={'300'} fontSize={'14px'} color={'#626B84'} textAlign={'center'}>احادیث را بر اساس موضوعات، مفاهیم یا کلیدواژه‌های اصلی به‌صورت خودکار دسته‌بندی می‌کند</Text>
                            </VStack>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default BodyBox
