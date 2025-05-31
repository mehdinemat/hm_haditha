import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <Box backgroundImage="url('/bg.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="start" height={'100vh'}>
      <Header />
      <Box >
        {/* Ensure content doesn't go under the fixed header */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
