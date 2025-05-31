import { Badge, Box, Container, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Header from '../layouts/Home/Header'
import SearchBox from '../components/Home/SearchBox'
import BodyBox from '../components/Home/BodyBox'
import Facilitis from '../components/Home/Facilities'
import Exprience from '../components/Home/Exprience'
const Home = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Header />
        <SearchBox />
      </Container>
      <BodyBox />
      <Container maxW="container.xl">
        <Facilitis />
      </Container>
      <Exprience />
    </>
  )
}

export default Home

