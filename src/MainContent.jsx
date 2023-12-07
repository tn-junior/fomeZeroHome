import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack, Text } from '@chakra-ui/react';

function MainContent() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [meta, setMeta] = useState('');
  const [eventos, setEventos] = useState([]);
  const [mapaAtivo, setMapaAtivo] = useState(null);

  useEffect(() => {
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

  const handleMouseEnter = (index) => {
    setMapaAtivo(index);
  };

  const handleMouseLeave = () => {
    setMapaAtivo(null);
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

   
    const novosEventos = [...eventos, novoPost];
    setEventos(novosEventos);
  
    localStorage.setItem('eventos', JSON.stringify(novosEventos));

    setData('');
    setHora('');
    setLocalizacao('');
    setNecessidades('');
    setMeta('');
  };

  return (
    <HStack spacing={4} align="start">
      
      <Box marginLeft={3} marginTop={12} marginRight={10} alignContent={'center'}>
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
              <Input
                type="text"
                value={localizacao}
                onChange={handleLocalizacaoChange}
                placeholder="Informe o local"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Necessidades:</FormLabel>
              <Input
                type="text"
                value={necessidades}
                onChange={handleNecessidadesChange}
                placeholder="Informe as necessidades"
                isRequired
              />
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

      
      <VStack marginTop={5} spacing={4}>
        {eventos.map((evento, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderColor='#F6AD55'
            borderRadius="md"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Text>Data: {evento.data}</Text>
            <Text>Hora: {evento.hora}</Text>
            <Text>Localização: {evento.localizacao}</Text>
            <Text>Necessidades: {evento.necessidades}</Text>
            <Text>Meta de Arrecadação: {evento.meta}</Text>
            {mapaAtivo === index && (
              <img
                src={`https://www.mapquestapi.com/staticmap/v5/map?key=hlsfCQoKWhZXYpLHl7z8k3JEkrEC06Fy&center=${evento.localizacao},MA&size=200,200,CA&zoom=14`}
                alt="Mapa do Local"
              />
            )}
          </Box>
        ))}
      </VStack>
    </HStack>
  );
}

export default MainContent;