import { Box, Container } from '@chakra-ui/react'
import HeaderSearch from './HeaderSearch'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <Box
      backgroundImage="url('/bg-search.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="start" height={'100vh'} w={'100%'} position={'fixed'} >
      <HeaderSearch />
      <Box overflowY={'scroll'} h={'70vh'}>
        {/* Ensure content doesn't go under the fixed header */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
