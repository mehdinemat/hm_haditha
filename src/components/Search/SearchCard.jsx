import { Badge, Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchCard = ({ item, onOpen, setSelectedHadith, index }) => {

  const navigate = useNavigate()

  const handleSearchClick = () => {
    setSelectedHadith(index)
    onOpen()
    // navigate('/hadith')
  }

  return (
    <VStack w={'100%'} alignItems={'start'} onClick={e => handleSearchClick()} cursor={'pointer'}>
      <Text bgGradient="linear(102.02deg, #4BE8AE 7.38%, #00A762 91.78%)"
        bgClip="text">{item?._source?.meta?.hadith_sanad}</Text>
      <Text fontSize={'20px'} fontWeight={'400'}>{item?._source?.content_ar}</Text>
      <Box
        mt={'10px'}
        textColor={'#626B84'}
        fontSize={'18px'}
        fontWeight={'400'}
        lineHeight="tall"
        dangerouslySetInnerHTML={{ __html: item?._source?.xml }}
      />
      <Badge variant={'ghost'} padding={'5px'} border='1px' borderColor={'gray.200'} borderRadius={'6px'} color={'#8A92A8'}>{item?._source?.address?.book_title}</Badge>
    </VStack>
  )
}

export default SearchCard
