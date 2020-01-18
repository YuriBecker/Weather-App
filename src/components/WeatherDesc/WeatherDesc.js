import React from 'react';
import { Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { capitalize } from '../../utils';

export default function WeatherDesc({ children }) {
  return (
    <Text fontSize={{ base: '18px', md: '24px' }} textAlign="center">
      {capitalize(children)}
    </Text>
  );
}

WeatherDesc.propTypes = {
  children: PropTypes.node.isRequired,
};
