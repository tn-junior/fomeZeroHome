import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { IoMdShare } from "react-icons/io";


function Sidebar() {
  const [interacao1, setInteracao1] = useState(false);
  const [interacao2, setInteracao2] = useState(false);
  const [interacao3, setInteracao3] = useState(false);

  const handleInteracao1 = async () => {
  

    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      console.log('Link copiado para a área de transferência:', url);
    } catch (error) {
      console.error('Erro ao copiar o link:', error);
    }
  };

  const handleInteracao2 = () => {
    setInteracao1(false);
    setInteracao2(!interacao2);
    setInteracao3(false);
  };

  const handleInteracao3 = () => {
    setInteracao1(false);
    setInteracao2(false);
    setInteracao3(!interacao3);
  };

  return (
    <Flex w="80px" position="fixed" top="0" right="0" h="100%" bg="#F6AD55"  justifyContent={'space-between'} flexDirection={'column'} textAlign={'center'}>
      <IconButton
        
        marginTop={3}
        onClick={handleInteracao1}
        icon={<IoMdShare />}
        color="black"
        _hover={{ bg: '#ED8936' }}
        _active={{ bg: 'none' }}
        bg={'none'}
        fontSize={'25px'}
      />
      <Button
        onClick={handleInteracao2}
        variant="ghost"
        w="100%"
        p={4}
        color="black"
        bgColor={interacao2 ? 'blue.500' : 'transparent'}
      >
        Interacao 2
      </Button>
      <Button
        onClick={handleInteracao3}
        variant="ghost"
        w="100%"
        p={4}
        color="black"
        bgColor={interacao3 ? 'purple.500' : 'transparent'}
      >
        Interacao 3
      </Button>
    </Flex>
  );
}

export default Sidebar;
