import { Box, Center, IconButton, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoAdd, IoSearch } from 'react-icons/io5'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const SearchBox2 = ({query, setQuery}) => {

  const navigate = useNavigate()


  const handleSearch = () => {
    navigate(`/search?content=${query}`)
  }

  return (
    <Center mt={{ base: '20px', md: '74px' }} w={'100%'}>
      <InputGroup w={'100%'} borderRadius={'12px'} bgColor={'white'}>
        <Input height={'56px'} placeholder='هوشمند جستجو کنید...' borderRadius={'12px'} borderColor={'#E0E0E0'} boxShadow="0px 1px 4px 0px #0000000D" onChange={e => setQuery(e.target.value)}
        />
        <InputRightElement height={'56px'} ml={'12px'} onClick={handleSearch}>
          <IconButton borderRadius={'100%'} icon={<CiSearch color='#00A762' />} bg="linear-gradient(320.71deg, #B9FDE0 6.56%, #E4F9F0 69.69%)"
            _hover={{
              bg: "linear-gradient(320.71deg, #9AE9CD 10%, #D6F5E9 75%)", // optional hover effect
            }}
            color="black" // icon color, adjust as needed
            _active={{
              bg: "linear-gradient(320.71deg, #8AD9BC 10%, #C2E6D5 75%)", // optional active effect
            }} />
        </InputRightElement>
      </InputGroup>
    </Center>
  )
}

export default SearchBox2
