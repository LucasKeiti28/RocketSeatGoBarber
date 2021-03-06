import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatorio.'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é obrigatorio.'),
    password: Yup.string()
      .min(6, 'Minimo de 6 caracteres')
      .required('A senha é obrigatoria.'),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Cadastro</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
