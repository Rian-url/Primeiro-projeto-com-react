import React from 'react'
import {Button} from '../Button';
import logo from '../../assets/logo-dio.png';

import {
BuscarInputContainer,
Column,
Container,
Input,
Menu,
MenuRight,
Row,
UserPicture,
Wrapper
} from './styles';

const Header = ({autenticado}) =>{
  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt="Logo da DIO"/>
            {autenticado ? (
            <>
              <BuscarInputContainer>
               <Input placeholder='Buscar'></Input>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
            ) : null}
        </Row>
        <Row>
        {autenticado ? (
          <UserPicture src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
         ) 
         :(
            <>
              <MenuRight href=''>Home</MenuRight>
              <Button title="Entrar"/>
              <Button title="Cadastrar"/>
            </>
        )}
        </Row>
     </Container>  
    </Wrapper>
  )
}

export {Header};