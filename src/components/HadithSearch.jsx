import { Box, Container } from '@chakra-ui/react'
import HeaderSearch from './HeaderSearch'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
const Layout = ({ children }) => {
  return (
    <Box
      backgroundImage="url('/bg-search.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="start" height={'100px'} w={'100%'} position={'fixed'} sx={{
        borderBottom: "0.5px solid",
        borderImageSource: "linear-gradient(90deg, #76FFDA 0%, #3FC9FA 100%)",
        borderImageSlice: 1,
      }}>
      <Header />
      <Box overflowY={'scroll'} h={'80vh'} mt={'120px'}>
        {/* Ensure content doesn't go under the fixed header */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
