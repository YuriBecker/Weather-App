import React from 'react';
import { Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function ErrorMessage({ children }) {
  return (
    <Text fontSize="2xl" textAlign="center" color="red.500">
      {children}
    </Text>
  );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
