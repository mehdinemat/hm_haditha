import { Button, Card, Container, Divider, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SearchCard from '../components/Search/SearchCard'
import { IoAdd, IoArrowForward, IoSearch } from 'react-icons/io5'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HadithCard from '../components/Hadith/HadithCard'
const Hadith = () => {
  return (
    <Container maxW="1150px">
      <VStack border="0.3px solid #E0E0E0"
        boxShadow="0px 8px 20px 0px #0000001A"
        borderRadius="md"
        p={4}
        bg="white" mt={'20px'} w={'100%'} padding={'48px'}>
        <HStack w={'100%'}>
          <HStack w={'100%'} justifyContent={'space-between'} border={'1px'} borderColor={'#E0E0E0'} height={'56px'} borderRadius={'16px'}>
            <HStack>
              <IconButton icon={<IoIosArrowForward />} colorScheme='gray' variant={'ghost'} />
              <Text>حدیث قبل</Text>
            </HStack>
            <HStack>
              <Text>حدیث بعد</Text>
              <IconButton icon={<IoIosArrowBack />} colorScheme='gray' variant={'ghost'} />
            </HStack>
          </HStack>
          <Button height={'56px'} width={'109px'} leftIcon={<IoSearch fontSize={'20px'} />} color="white"
            sx={{
              background: "linear-gradient(268.94deg, #D284FF -0.65%, #4D00FF 104.59%)",
            }}
            _hover={{
              opacity: 0.9,
            }} borderRadius={'12px'}>مشابه</Button>
        </HStack>
        <HadithCard />
      </VStack>
    </Container>
  )
}

export default Hadith
