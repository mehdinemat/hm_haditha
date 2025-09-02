import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = ({ children }) => {

  const slidesToShow = useBreakpointValue({ base: 1, lg: 4 }); // responsive value


  return (
    <Box backgroundImage="url('/bg.png')"
      backgroundSize="contain"
      backgroundPosition="start" height={'100vh'}>
      {slidesToShow == 1 ? <HeaderMobile /> : <Header />}
      <Box overflow={'hidden'}>
        {/* Ensure content doesn't go under the fixed header */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
