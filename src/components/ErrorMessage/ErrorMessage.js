import React from 'react';
import { Text } from '@chakra-ui/core';

function ErrorMessage({ children }) {
  return (
    <Text fontSize="2xl" textAlign="center" color="red.500">
      {children}
    </Text>
  );
}

export default ErrorMessage;
