import React, { useState } from 'react';
import Button from '../../components/Button';
import api from '../../services/api';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post(`/sessions`, { email });

    const { _id: id } = response.data;
    localStorage.setItem('user', id);

    history.push('/dashboard');
  };

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre
        <strong> talentos</strong> para a sua empresa
      </p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="email">E-mail *</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Seu melhor e-mail"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <Button modifier="feature">Cadastrar</Button>
      </form>
    </>
  );
};

export default Login;
