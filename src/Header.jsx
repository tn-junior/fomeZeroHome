import React from 'react';
import { Flex, Box, Input, Button, useDisclosure, Collapse,  } from '@chakra-ui/react';
import MobileMenu from './MobileMenu';
import { Search2Icon, EmailIcon   } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { RiHome3Line } from "react-icons/ri";

 function header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };
  return (
    <Flex as="header" align="center" justifyContent="space-between" p={2} bg="#F6AD55" color="white">
    <Box >
    <Button ml={2} p={2} _hover={{ bg: '#ED8936' }} h={12}  colorScheme="" mr={4}>
      <IconButton _hover={{ bg: 'none' }} h={8}  bg = "none" icon as={RiHome3Line} />
    </Button>  
    </Box>

    <Box >
    <Button colorScheme="" mr={4}>
    <Input
          borderColor={isSearchFocused ? 'black' : 'black'}
          borderWidth={1.6}
          _placeholder={{ opacity: 0.6, color: 'black' }}
          _focus={{ borderColor: 'black', boxShadow:'none' }}
          _hover={{ borderColor: 'black' }}
          onFocus={handleSearchFocus}
          borderRadius={4}
          color="black"
          onBlur={handleSearchBlur}
          placeholder="Pesquisar..."
          w={500}
          mr={2}  
          
        />
      <IconButton  _hover={{ bg: '#ED8936' }} bg = "none"  wd aria-label='Search database' icon={<Search2Icon />} />
    </Button>  
    </Box>

   
    <Box display={{ base: 'none', md: 'block' }}>
    
      <Button color='black' _hover={{ bg: '#ED8936' }} bg = "none" colorScheme="teal" mr={4}>
        Início
      </Button>
      <Button color = 'black' _hover={{ bg: '#ED8936' }}  bg = "none" colorScheme="teal" mr={4}>
        Sobre
      </Button>
      <Button color = 'black' _hover={{ bg: '#ED8936' }} leftIcon={<EmailIcon />} align="center" bg = "none" colorScheme="teal" mr={1}>
        Contato
      </Button>
    </Box>

    <Box display={{ base: 'block', md: 'none' }}>
      <Button onClick={onToggle} colorScheme="teal">
        Menu
      </Button>
    </Box>

    <Collapse in={isOpen}>
      <MobileMenu />
    </Collapse>
    <Box w="80px" position="fixed" top="16" right="0" h="100%" bg="#F6AD55">
        <p>Conteúdo da Sidebar</p>
      </Box>
  </Flex>
  
);
}
export default header;
