import React from 'react';
import { Box, Button } from '@chakra-ui/react';

function MobileMenu() {
  return (
    <Box p={4}>
      <Button colorScheme="teal" display="block" mb={2}>
        Início
      </Button>
      <Button colorScheme="teal" display="block" mb={2}>
        Sobre
      </Button>
      <Button colorScheme="teal" display="block" mb={2}>
        Contato
      </Button>
    </Box>
  );
}

export default MobileMenu;
