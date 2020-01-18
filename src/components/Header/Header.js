import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export default function Header({ city, country }) {
  return (
    <Flex align="center" justify="center" direction="column" w="100%" h="15vh" bg="#58a9dc">
      <Text fontSize={{ base: '3xl', md: '4xl' }} color="white">
        Previsão do Tempo
      </Text>
      <Text fontSize={{ base: '2xl', md: '3xl' }} color="white">
        {city && country && `${city} - ${country}`}
      </Text>
    </Flex>
  );
}
