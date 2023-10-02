import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack, // Para empilhar os elementos verticalmente
} from '@chakra-ui/react';
import CpfInput from './CpfInput';
import "./base.css"

function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCpfChange = (formattedCpf) => {
    setCpf(formattedCpf);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de cadastro
    console.log(`Nome: ${nome}, Email: ${email}, CPF: ${cpf}`);
  };

  return (
    <Box   p={4}>
      <Container maxW="md"  p={6} boxShadow="lg" rounded="md" bg="white">
        <Box textAlign="center" mb={4}>
          <h2>Cadastro</h2>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel >Nome:</FormLabel>
              <Input
                type="text"
                value={nome}
                onChange={handleNomeChange}
                placeholder="Nome Completo"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email:</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="exemplo@email.com"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>CPF:</FormLabel>
              <CpfInput cpf={cpf} onChange={handleCpfChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Cadastrar
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
}

export default Home;
