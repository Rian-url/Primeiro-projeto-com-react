import { Link } from "react-router-dom";

import BannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';



import {
Container,
TextContent,
Title,
TitleHighlight
} from './style'

const Feed = () => {
  return (<>
    <Header/>
    <Container>
      <Card/>
      <UserInfo percentual={62} name="Lobito da Silva" image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/>
    </Container>
    
 </>);
}

export { Feed }