import { Box, Card, Center, Grid, GridItem, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { IoArrowBack } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineArrowDownward } from "react-icons/md";


const BodyBox = () => {
  return (
    <Center as={VStack} mt={'64px'}>
      <VStack mb={'24px'} position={'relative'}>
        <Box h={'45px'} w={'34px'} border={'1px'} borderColor={'#1D6687'} borderTopRightRadius={'25px'} borderTopLeftRadius={'25px'} borderBottomRightRadius={'25px'} borderBottomLeftRadius={'25px'} color={'#1D6687'}></Box>
        <MdOutlineArrowDownward color="#1D6687" fontSize={'20px'} height={'18px'} style={{ position: 'absolute', top: '12px' }} />
      </VStack>
      <HStack w={'100%'} alignItems={'center'} justifyContent={'center'}>
        <HStack templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} w={'50%'} justifyContent={'space-between'}>
          <GridItem
            as={Card}
            height="309px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundImage={`./home_c_1.png`}
            backgroundRepeat="no-repeat"
            bgColor={'#EDFFFECC'}
            width={'250px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
    0px 3px 6px 0px #0000000D,
    0px 11px 11px 0px #0000000A,
    0px 24px 14px 0px #00000008,
    0px 42px 17px 0px #00000003,
    0px 66px 18px 0px #00000000
  `}
            position={'relative'}
          >
            <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} />} borderRadius={'15px'} w={'42px'} height={'42px'} bgColor={'#FFFFFF80'} color={'#1D6687'} bottom={'22px'} left={'22px'} position={'absolute'} />
            <Text fontSize={'22px'} fontWeight={'bold'} color={'#153F45'}>جستجوی معنایی</Text>
            <Text mt={'10px'} fontSize={'17px'} color={'#787878'}>ارائه نتایج دقیق و معنادار از میان حجم انبوه متون حدیثی</Text>
          </GridItem>
          <GridItem
            as={Card}
            height="309px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundImage={`./home_c_2.png`}
            bgColor={'#EEFAFFCC'}
            backgroundRepeat="no-repeat"
            width={'250px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
    0px 3px 6px 0px #0000000D,
    0px 11px 11px 0px #0000000A,
    0px 24px 14px 0px #00000008,
    0px 42px 17px 0px #00000003,
    0px 66px 18px 0px #00000000
  `}
          >
             <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} />} borderRadius={'15px'} w={'42px'} height={'42px'} bgColor={'#FFFFFF80'} color={'#1D6687'} bottom={'22px'} left={'22px'} position={'absolute'} />
            <Text fontSize={'22px'} fontWeight={'bold'} color={'#153F45'}>جستجوی مترادف‌ها</Text>
            <Text mt={'10px'} fontSize={'17px'} color={'#787878'}>یافتن سریع واژگان مرتبط برای درک بهتر مفاهیم حدیثی</Text>
          </GridItem>
          <GridItem
            as={Card}
            height="309px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            bgColor={'#FFF9F2CC'}
            backgroundImage={`./home_c_3.png`}
            width={'250px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
    0px 3px 6px 0px #0000000D,
    0px 11px 11px 0px #0000000A,
    0px 24px 14px 0px #00000008,
    0px 42px 17px 0px #00000003,
    0px 66px 18px 0px #00000000
  `}
          >
             <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} />} borderRadius={'15px'} w={'42px'} height={'42px'} bgColor={'#FFFFFF80'} color={'#1D6687'} bottom={'22px'} left={'22px'} position={'absolute'} />
            <Text fontSize={'22px'} fontWeight={'bold'} color={'#153F45'}>مشابهت‌یابی حدیث</Text>
            <Text mt={'10px'} fontSize={'17px'} color={'#787878'}>امکان یافتن احادیث یا مفاهیمی با معنای مشابه یک حدیث</Text>
          </GridItem>
        </HStack>
      </HStack>
    </Center>
  )
}

export default BodyBox
