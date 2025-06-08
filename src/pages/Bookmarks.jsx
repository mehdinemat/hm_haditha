import { Container, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'

const Bookmarks = () => {
  return (
    <Container maxW="1150px">
      <VStack w={'100%'} alignItems={'start'} my={'16px'}>
        <VStack mt={'100px'}>
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

export default Bookmarks
