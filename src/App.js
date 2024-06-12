import React, { useState, useRef } from 'react';
import Imgagem from './img/img.png';
import Seta from './img/seta.png'
import Lixeira from './img/lixeira.png'

import { Container, H1, Img, ContainerItens, InputLabel, Input, Button, User } from "./styles"


const App = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()


  function addNewUser() {
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]);
  }

  function deleteUser(userId){
      const newUser = users.filter((user) => user.id !== userId )
      setUsers(newUser)
  }

  return (
    <Container>
      <Img src={Imgagem} alt='logo-imagem' ></Img>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>
        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Lixeira} alt='Lixeira'></img></button>
            </User>
          ))}
        </ul>


      </ContainerItens>

    </Container>
  );
}

export default App;
