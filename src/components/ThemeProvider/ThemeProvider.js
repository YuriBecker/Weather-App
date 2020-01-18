import React from 'react';
import { ThemeProvider , theme, CSSReset } from "@chakra-ui/core";


export default function Provider({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    );
}
