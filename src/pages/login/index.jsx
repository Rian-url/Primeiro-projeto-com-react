import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {Column,Container,CriarText,Wrapper,Row,EsqueciText,Title,TitleLogin, SubtitleLogin} from './style'

const Login = () => {
  
  const navigate = useNavigate();

  const handleClickSingIN = () => {
    navigate('/feed')
  }

  return (<>
    <Header/>
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias
          e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
          <form>
            <Input placeholder="E-mail" type= "text"/> 
            <Input placeholder="Senha" type="password"/>  
            <Button title="Entrar" variant="secondary" onclick={handleClickSingIN} type="button" />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar conta</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
    
 </>);
}

export {Login}