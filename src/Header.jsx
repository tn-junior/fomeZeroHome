import React from 'react';
import { Flex, Box, Heading, Spacer, Button, useDisclosure, Collapse } from '@chakra-ui/react';
import MobileMenu from './MobileMenu';
import { Search2Icon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { IconButton, } from '@chakra-ui/react'


 function header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex as="header" align="center" justify="space-between" p={4} bg="teal.500" color="white">
    <Box>
      <Heading as="h1" size="lg">
        Logo
      </Heading>
    </Box>

    <Spacer />
    <Box display={{ base: 'none', md: 'block' }}>
    <IconButton aria-label='Search database' icon={<Search2Icon />} />
      <Button colorScheme="teal" mr={4}>
        Início
      </Button>
      <Button colorScheme="teal" mr={4}>
        Sobre
      </Button>
      <Button colorScheme="teal" mr={4}>
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
  </Flex>
);
}
export default header;
