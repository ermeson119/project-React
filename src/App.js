import React from 'react';
import Imgagem from './img/img.png';
import Seta from './img/seta.png'
import Lixeira from './img/lixeira.png'

import { Container, H1, Img, ContainerItens, InputLabel, Input, Button, User } from "./styles"


const App = () => {
  const users = [
    {id: Math.random(), name: "Ermeson", age: 24},
    {id: Math.random(), name: "Matheus", age: 21},
    {id: Math.random(), name: "Matheus", age: 21}
  ]; 
 
  return (

    <Container>
      <Img src={Imgagem} alt='logo-imagem' ></Img>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>
        <Button>Cadastrar <img alt="seta" src={Seta} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Lixeira} alt='Lixeira'></img></button>
            </User>
          ))}
        </ul>


      </ContainerItens>

    </Container>
  );
}

export default App;
