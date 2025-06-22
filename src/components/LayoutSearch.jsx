import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import HeaderSearch from './HeaderSearch'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeaderMobile from './HeaderMobile'
import HeaderMobileSearch from './HeaderMobileSearch'
const Layout = ({ children }) => {

  const slidesToShow = useBreakpointValue({ base: 1, lg: 4 }); // responsive value

  return (
    <Box
     
      backgroundPosition="start" height={'100vh'} w={'100%'} position={'fixed'} >
      {slidesToShow == 1 ? <HeaderMobileSearch /> : <HeaderSearch />}
      <Box overflowY={'scroll'} h={'70vh'}>
        {/* Ensure content doesn't go under the fixed header */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
