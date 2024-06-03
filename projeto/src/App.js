import React from 'react';


import { Container, H1, Img, ContainerItens, InputLabel, Input, Button } from "./styles"


const App = () => {
  return (
    <Container>
      <ContainerItens>
        <Img></Img>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>
        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
