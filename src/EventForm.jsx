// EventForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const EventForm = ({ onSubmit }) => {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [meta, setMeta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ data, hora, localizacao, necessidades, meta });
    // Limpar os campos após o envio, se necessário
    setData('');
    setHora('');
    setLocalizacao('');
    setNecessidades('');
    setMeta('');
  };

  return (
    <VStack spacing={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Data:</FormLabel>
          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl>
          <FormLabel>Hora:</FormLabel>
          <Input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl>
          <FormLabel>Localização:</FormLabel>
          <Input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl>
          <FormLabel>Necessidades:</FormLabel>
          <Textarea
            value={necessidades}
            onChange={(e) => setNecessidades(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl>
          <FormLabel>Meta de Arrecadação:</FormLabel>
          <Input
            type="number"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            isRequired
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Criar Evento
        </Button>
      </form>
    </VStack>
  );
};

export default EventForm;
