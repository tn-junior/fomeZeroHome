import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack, Text } from '@chakra-ui/react';

function MainContent() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [meta, setMeta] = useState('');
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Recupera os eventos do localStorage ao carregar a página
    const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    setEventos(eventosSalvos);
  }, []);

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleLocalizacaoChange = (e) => {
    setLocalizacao(e.target.value);
  };

  const handleNecessidadesChange = (e) => {
    setNecessidades(e.target.value);
  };

  const handleMetaChange = (e) => {
    setMeta(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const novoPost = {
      data,
      hora,
      localizacao,
      necessidades,
      meta,
    };

    // Adiciona o novo evento à lista de eventos
    const novosEventos = [...eventos, novoPost];
    setEventos(novosEventos);

    // Salva os eventos no localStorage
    localStorage.setItem('eventos', JSON.stringify(novosEventos));

    // Limpa os campos após a submissão
    setData('');
    setHora('');
    setLocalizacao('');
    setNecessidades('');
    setMeta('');
  };

  return (
    <HStack marginLeft={3} spacing={4} align="start">
      {/* Outros componentes ou seções do site podem ser adicionados aqui */}

      {/* Seção de Postagem de Eventos */}
      <Box alignContent={'center'}>
        <form onSubmit={handlePostSubmit}>
          <VStack spacing={4} align="start">
            <FormControl>
              <FormLabel>Data:</FormLabel>
              <Input type="date" value={data} onChange={handleDataChange} isRequired />
            </FormControl>
            <FormControl>
              <FormLabel>Hora:</FormLabel>
              <Input type="time" value={hora} onChange={handleHoraChange} isRequired />
            </FormControl>
            <FormControl>
              <FormLabel>Localização:</FormLabel>
              <Input type="text" value={localizacao} onChange={handleLocalizacaoChange} placeholder="Informe o local" isRequired />
            </FormControl>
            <FormControl>
              <FormLabel>Necessidades:</FormLabel>
              <Input type="text" value={necessidades} onChange={handleNecessidadesChange} placeholder="Informe as necessidades" isRequired />
            </FormControl>
            <FormControl>
              <FormLabel>Meta de Arrecadação:</FormLabel>
              <Input type="number" value={meta} onChange={handleMetaChange} placeholder="Informe a meta" isRequired />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Criar Post
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Seção Central de Exibição de Eventos */}
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Últimos Eventos
        </Text>
        {eventos.map((evento, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Text>Data: {evento.data}</Text>
            <Text>Hora: {evento.hora}</Text>
            <Text>Localização: {evento.localizacao}</Text>
            <Text>Necessidades: {evento.necessidades}</Text>
            <Text>Meta de Arrecadação: {evento.meta}</Text>
          </Box>
        ))}
      </VStack>
    </HStack>
  );
}

export default MainContent;
