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

  // const [name, setName] = useState(); 
  // const [age, setAge] = useState(); 

  // function addNewUser(){
  //     setUsers([...users,{id: Math.random(), name, age}]);
  // }
  // function changeInputName(event){
  //     setName(event.target.value);
  // }
  // function changeInputAge(event){
  //     setAge(event.target.value);
  // }


  return (
    <Container>
      <Img src={Imgagem} alt='logo-imagem' ></Img>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        {/* <Input onChange={changeInputName} placeholder="Nome"></Input> */}
        <Input ref={inputName} placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        {/* <Input onChange={changeInputAge} placeholder="Idade"></Input> */}
        <Input ref={inputAge} placeholder="Idade"></Input>
        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta} /></Button>

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
