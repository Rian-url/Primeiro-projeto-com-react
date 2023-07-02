import { Link } from "react-router-dom";

import BannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight  } from "./styles";


const Feed = () => {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Column>
      <Column flex={1}>
        <TitleHighlight>#5 RANKING TOP 5 DA SEMANA</TitleHighlight>
        <UserInfo percentual={83} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
        <UserInfo percentual={76} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
        <UserInfo percentual={65} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
        <UserInfo percentual={63} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
        <UserInfo percentual={62} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
      </Column>
    </Container>
    
 </>);
}

export { Feed }