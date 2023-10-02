import Cadastro from './Cadastro'
import Header from './header'
import React from 'react'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import './fonts.css'

const theme = extendTheme({
  
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
    <div>
    <Header />
    <Cadastro />
    </div>
    </ChakraProvider>
  )
}
export default App;
