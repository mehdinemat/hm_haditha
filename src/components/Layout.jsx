import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <Box backgroundImage="url('/bg.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="start" height={'100vh'}>
      <Header />
      <Box >
        {/* Ensure content doesn't go under the fixed header */}
        <Container maxW="container.lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
