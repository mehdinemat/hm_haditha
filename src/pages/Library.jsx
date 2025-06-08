import { Container, Divider, Grid, GridItem, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'

const Library = () => {
  return (
    <Container maxW="1150px">
      <VStack w={'100%'} alignItems={'start'} my={'16px'}>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} height={'80vh'} mt={'100px'} w={'100%'}>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem w={'100%'}>
            <Image  w={'100px'} h={'150px'}/>
          </GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
          <GridItem ></GridItem>
        </Grid>
      </VStack>
    </Container>
  )
}

export default Library
