import React from 'react';
import { Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function Icon({ src }) {
  return <Image size={{ base: '120px' }} src={src} alt="Weather Icon" />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
