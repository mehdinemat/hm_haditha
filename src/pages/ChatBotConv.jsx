import { Box, Button, Card, Center, Container, Divider, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react'
import { IoAdd, IoCloudUpload, IoCode, IoCopy, IoStar } from 'react-icons/io5'
import { IoIosSend } from "react-icons/io";
import { LuTextSelect } from "react-icons/lu";
import { LuNotepadTextDashed } from "react-icons/lu";
import { FaLayerGroup } from "react-icons/fa6";
import { HiHashtag } from "react-icons/hi2";

const ChatBotConv = () => {



    return (
        <Container maxW="672px">
            <VStack justify="center" align="center" p={8} pt={{ base: '30px', md: "164px" }} height={'calc( 100vh - 60px )'} gap={'12px'} alignItems={'start'} w={'100%'}>

                <HStack>
                    <IconButton icon={<IoStar />} colorScheme='blue' variant={'ghost'} />
                    <Text fontSize={'14px'}>من می تونم متن حدیث را خلاصه کنم. لطفا محتوای خود را بفرستید</Text>
                    <IconButton icon={<IoCopy />} colorScheme='blue' variant={'ghost'} />
                </HStack>

                <Box border={'.3px'} borderColor={'#D9D9D9'} padding={'16px'} borderRadius={'12px'} bgGradient="linear(169.5deg, #FFFFFF 25.51%, #E5E0FF 158.51%)"
                >
                    <Text fontSize={'13px'} fontWeight={'400'}>عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ: قَالَ أَبُو عَبْدِ اللَّهِ (عَلَيْهِ السَّلَامُ):
                        إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّةَ

                        این حدیث را لطفا خلاصه کن</Text>
                </Box>

                <HStack>
                    <IconButton icon={<IoStar />} colorScheme='blue' variant={'ghost'} />
                    <Text fontSize={'14px'}>خلاصه این حدیث چنین است: امام صادق (علیه‌السلام) می‌فرمایند: انسان دانش می‌آموزد تا به آن عمل کند، و با عملش شناخته شود. شناخت، سبب پذیرش او می‌شود، پذیرش باعث امان‌یافتن او می‌شود، و این امان یافتن، در نهایت او را به بهشت می‌رساند.</Text>
                    <IconButton icon={<IoCopy />} colorScheme='blue' variant={'ghost'}/>
                </HStack>  

            </VStack>

        </Container>
    )
}

export default ChatBotConv
