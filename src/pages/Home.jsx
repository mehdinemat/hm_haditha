import { Badge, Box, Container, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Header from '../layouts/Home/Header'
import SearchBox from '../components/Home/SearchBox'
import BodyBox from '../components/Home/BodyBox'
import Info from '../components/Home/Info'
import Facilitis from '../components/Home/Facilities'
import Exprience from '../components/Home/Exprience'
const Home = () => {
  return (
    <>
      <Container maxW="container.lg" height={'auto'} minH={'calc( 100vh - 110px )'} >
        <Header />
        <SearchBox />
      </Container>
      <BodyBox />
      {/* <Container maxW="container.xl"> */}
      <Facilitis />
      <Info />
      {/* </Container> */}
      <Exprience />
    </>
  )
}

export default Home

