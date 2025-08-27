import { Box, Card, Center, Grid, GridItem, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { IoArrowBack } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineArrowDownward } from "react-icons/md";


const Info = () => {
  return (
    <Center as={VStack} mt={'94px'}>

      <VStack gap={'32px'}>
        <Text fontSize={'35px'} fontWeight={'bold'} color={'#153F45'} mb={'50px'}>امکانات حدیثا</Text>
        <HStack w={'100%'} alignItems={'center'} justifyContent={'center'} gap={'32px'}>
          <GridItem
            as={Card}
            height="259px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            bgColor={'#FFF6EEB2'}
            width={'694px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
        0px 1px 3px 0px #0000000D,
        0px 5px 5px 0px #0000000A,
        0px 12px 7px 0px #00000008,
        0px 22px 9px 0px #00000003,
        0px 34px 10px 0px #00000000
      `}
            position={'relative'}
          >
            <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'35px'} />} borderRadius={'15px'} w={'65px'} height={'68px'} bgColor={'#FFFFFF33'} color={'#1D6687'} top={'22px'} left={'22px'} position={'absolute'} />
            <HStack>
              <Image src="./hashtag2.png" height={'84px'} width={'84px'} />
              <Text fontSize={'30px'} fontWeight={'bold'} color={'#153F45'}>تشخیص کلمات کلیدی</Text>
            </HStack>
            <Text mt={'10px'} fontSize={'23px'} color={'#787878'}>با تحلیل دقیق متن، کلمات و عبارات کلیدی هر حدیث را شناسایی و ارائه می‌کند</Text>
          </GridItem>
          <GridItem
            as={Card}
            height="259px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            bgColor={'#FFF6EEB2'}
            width={'694px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
        0px 1px 3px 0px #0000000D,
        0px 5px 5px 0px #0000000A,
        0px 12px 7px 0px #00000008,
        0px 22px 9px 0px #00000003,
        0px 34px 10px 0px #00000000
      `}
            position={'relative'}
          >
            <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'35px'} />} borderRadius={'15px'} w={'65px'} height={'68px'} bgColor={'#FFFFFF33'} color={'#1D6687'} top={'22px'} left={'22px'} position={'absolute'} />
            <HStack>
              <Image src="./note2.png" height={'84px'} width={'84px'} />
              <Text fontSize={'30px'} fontWeight={'bold'} color={'#153F45'}>خلاصه سازی</Text>
            </HStack>
            <Text mt={'10px'} fontSize={'23px'} color={'#787878'}>امکان تعامل مستقیم با سامانه برای پاسخ به سوالات یا دریافت توضیحات از مفاهیم حدیثی</Text>
          </GridItem>
        </HStack>
        <HStack w={'100%'} alignItems={'center'} justifyContent={'center'} gap={'32px'}>
          <GridItem
            as={Card}
            height="259px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            bgColor={'#FFF6EEB2'}
            width={'694px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
        0px 1px 3px 0px #0000000D,
        0px 5px 5px 0px #0000000A,
        0px 12px 7px 0px #00000008,
        0px 22px 9px 0px #00000003,
        0px 34px 10px 0px #00000000
      `}
            position={'relative'}
          >
            <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'35px'} />} borderRadius={'15px'} w={'65px'} height={'68px'} bgColor={'#FFFFFF33'} color={'#1D6687'} top={'22px'} left={'22px'} position={'absolute'} />
            <HStack>
              <Image src="./more2.png" height={'84px'} width={'84px'} />
              <Text fontSize={'30px'} fontWeight={'bold'} color={'#153F45'}>تشخیص موجودیت</Text>
            </HStack>
            <Text mt={'10px'} fontSize={'23px'} color={'#787878'}>استخراج و شناسایی موجودیت‌های مرتبط از متن حدیثی
              (مانند افراد، مکان‌ها، مفاهیم کلیدی یا موضوعات)</Text>
          </GridItem>
          <GridItem
            as={Card}
            height="259px"
            backgroundSize="contain"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            bgColor={'#FFF6EEB2'}
            width={'694px'}
            borderRadius={'30px'}
            padding={'22px'}
            boxShadow={`
        0px 1px 3px 0px #0000000D,
        0px 5px 5px 0px #0000000A,
        0px 12px 7px 0px #00000008,
        0px 22px 9px 0px #00000003,
        0px 34px 10px 0px #00000000
      `}
            position={'relative'}
          >
            <IconButton icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'35px'} />} borderRadius={'15px'} w={'65px'} height={'68px'} bgColor={'#FFFFFF33'} color={'#1D6687'} top={'22px'} left={'22px'} position={'absolute'} />
            <HStack>
              <Image src="./message2.png" height={'84px'} width={'84px'} />
              <Text fontSize={'30px'} fontWeight={'bold'} color={'#153F45'}>چت‌بات هوشمند</Text>
            </HStack>
            <Text mt={'10px'} fontSize={'23px'} color={'#787878'}>امکان تعامل مستقیم با سامانه برای پاسخ به سوالات یا دریافت توضیحات از مفاهیم حدیثی</Text>
          </GridItem>
        </HStack>
      </VStack>
    </Center>
  )
}

export default Info
