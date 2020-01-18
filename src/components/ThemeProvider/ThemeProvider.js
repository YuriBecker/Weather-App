import React from 'react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
