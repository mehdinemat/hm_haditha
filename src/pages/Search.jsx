import { Container, Divider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'
const Search = () => {
  return (
    <Container maxW="1150px">
      <VStack w={'100%'} alignItems={'start'} my={'16px'}>
        <Text fontSize={'11px'} color={'#B4C2CF'}>نتیجه</Text>
        <VStack mt={'10px'}>
          <SearchCard />
          <Divider my={'10px'} />
          <SearchCard />
          <Divider my={'10px'} />
          <SearchCard />
          <Divider my={'10px'} />
          <SearchCard />
          <Divider my={'10px'} />
          <SearchCard />
          <Divider my={'10px'} />
          <SearchCard />
        </VStack>
      </VStack>
    </Container>
  )
}

export default Search
