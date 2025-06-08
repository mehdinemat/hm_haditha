import { Badge, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SearchCard = () => {
  return (
    <VStack w={'100%'} alignItems={'start'}>
      <Text bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
        bgClip="text">حضرت محمد (ص):</Text>
      <Text fontSize={'20px'} fontWeight={'400'}>التَّوْحِيدُ أَنْ لَا تُجَوِّزَ عَلَى رَبِّكَ مَا جَازَ عَلَيْكَ</Text>
      <Text mt={'10px'} fontWeight={'400'} fontSize={'18px'} color={'#626B84'}>توحید آن است که برای پروردگارت چیزی را تقوی ممکن ندانی مناجات که برای خودت ممکن می‌دانی.</Text>
      <Badge variant={'ghost'} padding={'5px'} border='1px' borderColor={'gray.200'} borderRadius={'6px'} color={'#8A92A8'}>الکافی، جلد ۱، صفحه ۱۰۳</Badge>
    </VStack>
  )
}

export default SearchCard
