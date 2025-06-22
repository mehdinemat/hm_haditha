import { Box, Center, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react"
import { MdKeyboardArrowDown } from "react-icons/md";


const BodyBox = () => {
  return (
    <Center as={VStack} mt={'64px'}>
      <VStack mb={'24px'}>
        <Text color={'#1B2132'}>قابلیت‌ها</Text>
        <MdKeyboardArrowDown color="#9AE9CD" fontSize={'30px'}/>
      </VStack>
      <HStack w={'100%'} borderTop="1px solid"
        style={{
          borderImageSource: "linear-gradient(90deg, #76FFDA 0%, #3FC9FA 100%)",
          borderImageSlice: 1,
        }}>
        <Grid templateColumns={{base:"repeat(1, 1fr)" , md:"repeat(3, 1fr)"}} w={'100%'}>
          <GridItem
            as={Box}
            height="660px"
            w="100%"
            backgroundImage="url('/info1.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <GridItem
            as={Box}
            height="660px"
            w="100%"
            backgroundImage="url('/info2.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <GridItem
            as={Box}
            height="660px"
            w="100%"
            backgroundImage="url('/info3.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
        </Grid>
      </HStack>
    </Center>
  )
}

export default BodyBox
