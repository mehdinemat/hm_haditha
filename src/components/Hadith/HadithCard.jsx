import { Badge, Button, Divider, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'

const HadithCard = () => {
  return (
    <VStack w={'100%'} alignItems={'start'} mt={'20px'}>
      <HStack w={'100%'}>
        <IconButton icon={<IoBookmarkOutline color='#29D985' fontSize={'20px'} />} colorScheme='gray' variant={'outline'} height={'32px'} />
        <Badge variant={'ghost'} padding={'5px'} border='1px' borderColor={'gray.200'} borderRadius={'6px'} color={'#8A92A8'} height={'32px'} textAlign={'center'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>

      </HStack>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Text mt={'20px'} bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
          bgClip="text">حضرت محمد (ص):</Text>
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'}>کپی</Button>
      </HStack>
      <Text fontSize={'20px'} fontWeight={'400'}>عَنِ الْحَسَنِ بْنِ عَلِيِّ بْنِ يُوسُفَ، عَنْ جَدِّهِ، قَالَ:
        قَالَ أَبُو عَبْدِ اللَّهِ (عَلَيْهِ السَّلَامُ): إِنَّمَا يَدْرُسُ الْإِنسَانُ لِيَعْلَمَ، وَإِنَّمَا يَعْلَمُ لِيَعْمَلَ، وَإِنَّمَا يَعْمَلُ لِيُعْرَفَ بِهِ، وَإِنَّمَا يُعْرَفُ بِهِ لِيُقْبَلَ بِهِ، وَإِنَّمَا يُقْبَلُ بِهِ لِيُؤْمَنَ عَلَيْهِ، وَإِنَّمَا يُؤْمَنُ عَلَيْهِ لِيُدْخَلَ الْجَنَّةَ</Text>
      <Divider orientation="horizontal"
        sx={{
          borderBottom: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #A0F5FF 30.4%, #3FC9FA 71.47%, #A7FFE7 100%)",
          borderImageSlice: 1,
        }} my={'16px'} />
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Text bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
          bgClip="text">ترجمه</Text>
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'}>کپی</Button>

      </HStack>
      <Text fontSize={'18px'} fontWeight={'400'} >امام جعفر صادق علیه‌السلام:
        انسان دانش می‌آموزد تا بداند، و می‌داند تا عمل کند، و عمل می‌کند تا به سبب آن شناخته شود، و شناخته می‌شود تا (عمل او) پذیرفته گردد، و پذیرفته می‌شود تا در امان قرار گیرد، و در امان قرار می‌گیرد تا وارد بهشت شود.</Text>
      <Divider orientation="horizontal"
        sx={{
          borderBottom: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #A0F5FF 30.4%, #3FC9FA 71.47%, #A7FFE7 100%)",
          borderImageSlice: 1,
        }} my={'16px'} />
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Text bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
          bgClip="text">شرح</Text>
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'}>کپی</Button>

      </HStack>
      <Text fontSize={'18px'} fontWeight={'400'}>این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند. این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.</Text>
    </VStack>
  )
}

export default HadithCard
