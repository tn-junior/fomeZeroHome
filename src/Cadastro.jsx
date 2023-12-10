import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react';
import CpfInput from './CpfInput';
import './base.css';

function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [cadastroAtivo, setCadastroAtivo] = useState(true);
  const [loginAtivo, setLoginAtivo] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedNome = localStorage.getItem('userName');

    if (storedEmail && storedNome) {
      setEmail(storedEmail);
      setNome(storedNome);
      setCadastroAtivo(false);
    }
  }, []);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleCpfChange = (formattedCpf) => {
    setCpf(formattedCpf);
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}, CPF: ${cpf}`);
    setCadastroAtivo(false);

   
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', nome);
  };

  const handleLoginClick = () => {
    setLoginAtivo(!loginAtivo);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Senha: ${senha}`);
    setCadastroAtivo(false); 
    setLoginAtivo(false); 

   
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', 'Nome do Usuário'); 
  };

  return (
    <Box p={4}>
      {(cadastroAtivo || loginAtivo) && <Box className="fundo-escuro" />}

      {cadastroAtivo && !loginAtivo && (
        <Container
          maxW="md"
          p={6}
          boxShadow="lg"
          rounded="md"
          bg="white"
          className="cadastro-centralizado"
        >
          <Box textAlign="center" mb={4}>
            <h2>Cadastro</h2>
          </Box>
          <form onSubmit={handleCadastroSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Nome:</FormLabel>
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
              <HStack spacing={4}>
                <Button type="submit" colorScheme="blue">
                  Cadastrar
                </Button>
                <Button colorScheme="green" onClick={handleLoginClick}>
                  Login
                </Button>
              </HStack>
            </VStack>
          </form>
        </Container>
      )}

      {cadastroAtivo && loginAtivo && (
        <Container
          maxW="md"
          p={6}
          boxShadow="lg"
          rounded="md"
          bg="white"
          className="cadastro-centralizado"
        >
          <Box textAlign="center" mb={4}>
            <h2>Login</h2>
          </Box>
          <form onSubmit={handleLoginSubmit}>
            <VStack spacing={4}>
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
                <FormLabel>Senha:</FormLabel>
                <Input
                  type="password"
                  value={senha}
                  onChange={handleSenhaChange}
                  placeholder="Senha"
                  isRequired
                />
              </FormControl>
              <Button type="submit" colorScheme="green">
                Login
              </Button>
            </VStack>
          </form>
          <Button mt={4} onClick={() => setLoginAtivo(false)}>
            Voltar
          </Button>
         
        </Container>
        
      )}
    </Box>
    
  );
}

export default Home;
