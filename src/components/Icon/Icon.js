import React from 'react';
import { Image } from '@chakra-ui/core';

export default function Icon({ src }) {
  return <Image size={{ base: '120px' }} src={src} alt="Weather Icon" />;
}
