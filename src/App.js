import React from 'react';
import Imgagem from './img/img.png';
import Seta from './img/seta.png'

import { Container, H1, Img, ContainerItens, InputLabel, Input, Button } from "./styles"


const App = () => {
  // const users = [
  //   {id: Math.random(), name: "Ermeson", age: 24},
  //   {id: Math.random(), name: "Matheus", age: 21},
  //   {id: Math.random(), name: "Matheus", age: 21}
  // ]; 
 
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

        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul> */}


      </ContainerItens>

    </Container>
  );
}

export default App;
