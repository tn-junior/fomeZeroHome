import React, { useState, useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { IoMdShare } from 'react-icons/io';
import { AiFillLike } from 'react-icons/ai';
import { IoIosInformationCircle } from "react-icons/io";


function Sidebar() {
  const [interacao1, setInteracao1] = useState(false);
  const [interacao2, setInteracao2] = useState(0); 
  const [interacao3, setInteracao3] = useState(false);

  useEffect(() => {
   
    const curtidasSalvas = JSON.parse(localStorage.getItem('curtidas')) || 0;
    setInteracao2(curtidasSalvas);
  }, []);

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
    
    const novaContagem = interacao2 + 1;
    setInteracao2(novaContagem);
    
    localStorage.setItem('curtidas', JSON.stringify(novaContagem));
    setInteracao3(false);
  };

  const handleInteracao3 = () => {
    setInteracao1(false);
    setInteracao2(0);
    localStorage.removeItem('curtidas'); 
    setInteracao3(!interacao3);
  };

  return (
    <Flex
      w="80px"
      position="fixed"
      top="0"
      right="0"
      h="100%"
      bg="#F6AD55"
      justifyContent={'space-between'}
      flexDirection={'column'}
      textAlign={'center'}
    >
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
      <Flex _hover={{ bg: '#ED8936' }} bg={'none'} flexDirection="column" alignItems="center">
        <IconButton
          _hover={{bg:'none'}}
          fontSize={'25px'}
          icon={<AiFillLike />}
          onClick={handleInteracao2}
          variant="ghost"
          w="100%"
          p={4}
          color="black"
          
        />
        <Text fontWeight={'bold'} fontSize="sm" color="black">
          {interacao2} 
        </Text>
      </Flex>
      <IconButton
      _hover={{bg:'none'}}
        fontSize={'25px'}
        icon={<IoIosInformationCircle />}
        onClick={handleInteracao3}
        variant="ghost"
        w="100%"
        p={4}
        color="black"
      />
    </Flex>
  );
}

export default Sidebar;
