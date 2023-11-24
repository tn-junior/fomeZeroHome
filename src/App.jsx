import Header from './Header'

import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import './fonts.css'
import { Outlet } from 'react-router-dom'

const theme = extendTheme({
  
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
    <div>
    <Header />
    <Outlet/>
    </div>
    </ChakraProvider>
  )
}
export default App;