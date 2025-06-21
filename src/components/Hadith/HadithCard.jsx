import { Badge, Box, Button, Divider, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const HadithCard = ({ item }) => {

  const navigate = useNavigate()
  const handleClickBook = () => {
    navigate(`/library/${item?._source?.address?.vol_id}?page=${item?._source?.address?.page_num}`)
  }

  console.log(item)
  return (
    <VStack w={'100%'} alignItems={'start'} mt={'20px'}>
      <HStack w={'100%'}>
        <IconButton icon={<IoBookmarkOutline color='#29D985' fontSize={'20px'} />} bgColor={'white'} colorScheme='gray' variant={'outline'} height={'32px'} />
        <Badge variant={'ghost'} padding={'5px'} border='1px' borderColor={'gray.200'} bgColor={'white'} borderRadius={'6px'} color={'#8A92A8'} height={'32px'} textAlign={'center'} onClick={handleClickBook} cursor={'pointer'}>{item?._source?.address?.vol_title} , صفحه : {item?._source?.address?.page_num}</Badge>

      </HStack>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <Text mt={'20px'} bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
          bgClip="text">{item?._source?.meta?.hadith_sanad}</Text>
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'} bgColor={'white'}>کپی</Button>
      </HStack>
      <Text fontSize={'20px'} fontWeight={'400'} whiteSpace="pre-wrap" wordBreak="break-word">{item?._source?.content_ar}</Text>
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
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'} bgColor={'white'}>کپی</Button>

      </HStack>
      <Box
        mt={'10px'}
        textColor={'#626B84'}
        fontSize={'18px'}
        fontWeight={'400'}
        lineHeight="tall"
        dangerouslySetInnerHTML={{ __html: item?._source?.xml }}
      />
      {/* <Divider orientation="horizontal"
        sx={{
          borderBottom: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #A0F5FF 30.4%, #3FC9FA 71.47%, #A7FFE7 100%)",
          borderImageSlice: 1,
        }} my={'16px'} /> */}
      {/* <HStack w={'100%'} justifyContent={'space-between'}>
        <Text bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
          bgClip="text">شرح</Text>
        <Button variant={'outline'} colorScheme='gray' height={'24px'} width={'44px'} bgColor={'white'}>کپی</Button>

      </HStack>
      <Text fontSize={'18px'} fontWeight={'400'}>این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند. این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا برساند.این حدیث به سلسله مراتب علم و عمل اشاره دارد و تأکید می‌کند که علم باید به عمل منتهی شود و عمل نیز باید با نیت خالص و برای رضای خداوند باشد تا مورد قبول واقع شود و انسان را به سعادت ابدی برساند.</Text> */}
    </VStack>
  )
}

export default HadithCard
