"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Textarea,
  IconButton,
  Text,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
  FaMicrophone,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";
import { RiVoiceprintFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

export default function ChatBotInput({ submit }) {
  const [value, setValue] = useState("");
  const maxChars = 500;

  return (
    <Box w="100%" maxW="600px" mx="auto">
      {/* Textarea container */}
      <Box position="relative">
        <Textarea
          bgColor={'#FFFFFDB2'}
          borderRadius={'10px'}
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= maxChars) {
              setValue(e.target.value);
            }
          }}
          placeholder="جستجو..."
          h="112px"
          pl="120px" // space for send + counter
          pb="40px" // space for icons at bottom
          resize="none"
          border="1px solid #A9DAF0"
          boxShadow="
    0px 12px 25px 0px #0000000D,
    0px 46px 46px 0px #0000000A,
    0px 104px 62px 0px #00000008,
    0px 184px 74px 0px #00000003,
    0px 288px 80px 0px #00000000
  "
        />

        {/* Character counter (inside textarea, bottom-right) */}
        <Text
          position="absolute"
          top="40px"
          left="3"
          fontSize="sm"
          color={value.length >= maxChars ? "red.500" : "gray.500"}
        >
          {value.length}/{maxChars}
        </Text>

        {/* Action bar INSIDE textarea */}
        <Flex
          position="absolute"
          bottom="2"
          left="2"
          right="2"
          justify="space-between"
          align="center"
        >
          {/* Left icons */}
          <Flex gap={2}>
            <IconButton aria-label="Emoji" icon={<GrAttachment />} size="sm" variant="ghost" />
            <IconButton aria-label="Attach file" icon={<RiVoiceprintFill />} size="sm" variant="ghost" />
            <IconButton aria-label="Mic" icon={<WiStars />} size="sm" variant="ghost" />
          </Flex>

          {/* Send button */}
          <IconButton
            cursor={'pointer'}
            borderRadius={'10px'}
            bgColor="#153F45"
            icon={<Box transform="rotate(180deg)">
              <VscSend />
            </Box>}
            isDisabled={value.trim() === ""}
            onClick={e=>submit(value)}
          />
        </Flex>
      </Box>
      <HStack mt={'10px'}>
        <Button bgColor={'#FFFFFD'} colorScheme="none" color={'#153F45'} borderRadius={'12px'} leftIcon={<Image src="/more-2.png" height={'20px'} />}>تشخیص موجودیت</Button>
        <Button bgColor={'#FFFFFD'} colorScheme="none" color={'#153F45'} borderRadius={'12px'} leftIcon={<Image src="/note.png" height={'20px'} />}>خلاصه‌سازی</Button>
        <Button bgColor={'#FFFFFD'} colorScheme="none" color={'#153F45'} borderRadius={'12px'} leftIcon={<Image src="/color-swatch.png" height={'20px'} />}>دسته‌بندی</Button>
        <Button bgColor={'#FFFFFD'} colorScheme="none" color={'#153F45'} borderRadius={'12px'} leftIcon={<Image src="/hashtag.png" height={'20px'} />}>کلمات کلیدی</Button>
      </HStack>
    </Box>
  );
}
