import React from 'react';
import { Flex, Text, Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function ShowTemps({ temp, maxTemp, minTemp }) {
  return (
    <Flex
      align="center"
      justify="center"
      marginLeft={{ base: 0, md: 6 }}
      height="100%"
      borderLeft={{ base: 'none', md: '2px solid white' }}
      borderTop={{ base: '2px solid white', md: 'none' }}
      paddingLeft={{ base: 0, md: '20px' }}
      marginTop={{ base: '20px', md: 0 }}
    >
      <Text fontSize={{ base: '90px', md: '100px' }} color="white">
        {temp}°
      </Text>
      <Stack ml={3} padding={3}>
        <Text
          fontSize={{ base: '1xl', md: '2xl' }}
          borderBottomWidth={2}
          borderBottomColor="gray.200"
        >
          Max: {maxTemp}°
        </Text>
        <Text fontSize={{ base: '1xl', md: '2xl' }}>Min: {minTemp}°</Text>
      </Stack>
    </Flex>
  );
}

ShowTemps.propTypes = {
  temp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
};
