import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowBack, IoSearch } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

const images = [
  {
    url: "/Book-2.png",
    title: "حجت‌الاسلام خسروپناه",

  },
  {
    url: "/Book-2.png",
    title: "حجت‌الاسلام خسروپناه",

  },
  {
    url: "/Book-2.png",
    title: "حجت‌الاسلام خسروپناه",

  },
];

const category  = [
  {title:'علوم قرآنی' , details:'128 کتاب' } , 
  {title:'فقه و احکام' , details:'128 کتاب' } , 
  {title:'امامت و ولایت' , details:'128 کتاب' } , 
  {title:'کتب رجالی' , details:'128 کتاب' } , 
  {title:'علوم قرآنی' , details:'128 کتاب' } , 
  {title:'فقه و احکام' , details:'128 کتاب' } , 
]

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 100000,
};

const Library = () => {

  return (
    <Container maxW="1150px" padding={0} mb={'200px'} >
      <Box  as={VStack} mt={'100px'} >
        <Text fontSize={'30px'} color={'#153F45'}>کتابخانه حدیثا</Text>
        <Box position="relative" w="100%" > {/* parent container */}
          <Image
            src="/book_wood.png"
            position="absolute"
            bottom="-270px"
            left="0"
            width="100%"      // stretch to parent's width
            objectFit="cover" // crop if needed
            zIndex={1}
          />


          {/* Slider */}
          <Box position="relative" zIndex={2} w={'100%'} > {/* higher than background */}
            <Slider {...settings}>
              {images.map((item, index) => (
                <Box key={index} px="25px" position="relative" >
                  <Box
                    w="464px"
                    borderRadius="40px"
                    mx="auto"
                    padding={'40px'}

                  >
                    <Flex direction="column" align="end" w={'100%'} justify="center" textAlign="center">
                      <Text
                        color="#FFFFFF"
                        width="100%"
                        fontWeight="300"
                        fontSize="16px"
                        textAlign={'justify'}
                        dir="rtl"
                      >
                        {item.caption}
                      </Text>
                      <HStack w={'100%'} justifyContent={'space-between'} >
                        <HStack alignItems={'start'} gap={0} >
                          <VStack w={'100%'} alignItems={'end'} justifyContent={'end'}>
                            <Text fontSize="12px" fontWeight="400" color="#FFFFFF">{item.title}</Text>
                            <Text color="#FFFFFF" fontSize="10px" fontWeight="300" mb="24px">{item?.subTitle}</Text>
                          </VStack>
                          <Image
                            src={item.url}
                            alt={item.title}
                            width="227px"
                            height="335px"
                            objectFit="cover"
                          />
                        </HStack>
                      </HStack>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>

        <Box bgColor={'#FFFFFD4D'} mt={'40px'} w={'100%'} border="1px solid"
          sx={{
            borderImageSource:
              "linear-gradient(215.88deg, #FFFFFF -9.34%, rgba(255, 255, 255, 0) 26.78%, rgba(255, 255, 255, 0) 63.46%, #FFFFFF 106.25%)",
            backdropFilter: "blur(20px)",
            boxShadow: `
      0px 9px 19px 0px #0000000D,
      0px 34px 34px 0px #0000000A,
      0px 77px 46px 0px #00000008,
      0px 138px 55px 0px #00000003,
      0px 215px 60px 0px #00000000
    `,
          }} borderRadius={'50px'} padding={'30px'}>
          <HStack w={'100%'} justifyContent={'space-between'} mb={'30px'}>
          <Text color={'#153F45'} fontSize={'30px'} >دسته بندی کتاب‌ها</Text>
          <HStack cursor={'pointer'} alignItems={'center'} color={'#1D6687'}>
          <Text>همه دسته‌ها</Text>
          <IoIosArrowBack/>
          </HStack>
          </HStack>
          <HStack w={'100%'} justifyContent={'space-between'} mb={'75px'}>
            {
              category?.map((item)=>(
            <Box bgColor={'#F2FFFC99'} padding={'20px'} borderRadius={'30px'} height={'200px'} w={'170px'} sx={{
        boxShadow: `
          0px 3px 6px 0px #0000000D,
          0px 11px 11px 0px #0000000A,
          0px 24px 14px 0px #00000008,
          0px 42px 17px 0px #00000003,
          0px 66px 18px 0px #00000000
        `,
        backdropFilter: "blur(20px)"
      }}>
              <Text fontSize={'22px'} color={'#153F45'}>{item?.title}</Text>
              <Text fontSize={'16px'} color={'#153F45'} mt={'15px'}>{item?.details}</Text>
              <IconButton h={'44px'}  w={'42px'} icon={<IoArrowBack style={{ transform: "rotate(45deg)" }} fontSize={'20px'} />} borderRadius={'15px'} bgColor={'#FFFFFF80'} color={'#1D6687'} bottom={'20px'} left={'20px'} position={'absolute'} />

            </Box>

              ))
            }
          </HStack>
          <VStack w={'100%'} justifyContent={'space-between'}>
                  <HStack w={'100%'} justifyContent={'space-between'} mb={'30px'}>
                    <Text fontSize={'30px'} color={'#153F45'}>745 کتاب</Text>
                    <HStack fontSize={'20px'} color={'#1D6687'}>
                    <Text>جستجو کتاب</Text>
                    <IoSearch/>
                    </HStack>
                  </HStack>


                  <Grid templateColumns='repeat(5, 1fr)' gap={6} w={'100%'}>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    <VStack alignItems={'start'} color={'#153F45'} >
                    <Image src='/book_cat.png' w={'154px'} h={'228px'} sx={{
    boxShadow: `
      0px 1px 3px 0px #0000001A,
      0px 6px 6px 0px #00000017,
      0px 13px 8px 0px #0000000D,
      0px 23px 9px 0px #00000003,
      0px 36px 10px 0px #00000000
    `,
    backdropFilter: "blur(20px)",
  }}/>
                    <Text fontSize={'18px'} color={'#153F45'}>نام کتاب</Text>
                    <Text fontSize={'12px'} color={'#153F45'}>جلد 1</Text>
                    </VStack>
                    </Grid>

                </VStack>
        </Box>
          
      </Box>
    </Container>
  )
}

export default Library
