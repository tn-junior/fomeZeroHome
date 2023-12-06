import Header from './Header'
import MainContent from './MainContent';
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
    <MainContent/>
    <Outlet/>
    </div>
    </ChakraProvider>
  )
}
export default App;