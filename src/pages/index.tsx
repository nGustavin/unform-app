import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import Head from 'next/head'
import * as Yup from 'yup'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import Input from '../components/Form/input'
import InputStyle from '../components/Form/style'

const Home: React.FC = () => {
  const formRef = useRef(null)
  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().email().required('O Email e obrigatorio'),
        name: Yup.string()
          .min(2, 'O nome deve ter no minimo dois caracteres')
          .required('O nome e obrigatorio'),
        password: Yup.string()
          .min(6, 'Sua senha deve conter no minimo 6 caracteres')
          .required('insira uma senha valida'),
        address: Yup.object().shape({
          street: Yup.string().required('A rua e obrigatoria'),
          number: Yup.string().required('O numero e obrigatoria')
        })
      })
      await schema.validate(data, { abortEarly: false })
      console.log(data)
    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
        console.log(err)
        formRef.current.clearField('email')
        formRef.current.clearField('password')
      }
    }
  }

  const initialData = {
    email: 'gust4f3rn@gmail.com'
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <h1>ReactJS Structure</h1>
        <p>Unform</p>
        <InputStyle>
          <Input name="name" placeholder="Name"></Input>
          <Input type="email" name="email" placeholder="Email"></Input>
          <Input type="password" name="password" placeholder="Password"></Input>
          <Scope path="address">
            <Input name="street" placeholder="Street"></Input>
            <Input name="number" placeholder="Number"></Input>
          </Scope>
          <button type="submit"> Send </button>
        </InputStyle>
      </Form>
    </Container>
  )
}

export default Home
