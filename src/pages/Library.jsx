import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    <Container maxW="1150px" padding={0}>
      <Box height={'100vh'} as={VStack} mt={'100px'}>
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
          <Text color={'#153F45'} fontSize={'30px'}>دسته بندی کتاب‌ها</Text>
        </Box>

      </Box>
    </Container>
  )
}

export default Library
