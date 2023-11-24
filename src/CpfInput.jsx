import React from 'react';

function CpfInput({ cpf, onChange }) {
  const formatCpf = (value) => {
    const formattedCpf = value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2') // Insere ponto após o terceiro dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Insere ponto após o sexto dígito
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Insere hífen após o nono dígito
      .slice(0, 14); // Limita o comprimento a 14 caracteres

    return formattedCpf;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const formattedCpf = formatCpf(inputValue);
    onChange(formattedCpf);
  };

  return (
    <input
      type="text"
      value={cpf}
      onChange={handleInputChange}
      maxLength="14"
      placeholder="000.000.000-00"
    />
  );
}

export default CpfInput;



