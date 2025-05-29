import { IconButton, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { IoAdd } from 'react-icons/io5'

const SearchBox = () => {
  return (
    <InputGroup  >
      <Input w={'656px'} height={'72px'} placeholder='هوشمند جستجو کنید...' />
      <InputLeftElement height={'72px'}>
        <IconButton icon={<IoAdd />} /></InputLeftElement>
    </InputGroup>
  )
}

export default SearchBox
