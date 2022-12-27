import { Link } from "react-router-dom";

import BannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {
Container,
TextContent,
Title,
TitleHighlight
} from './style'

const Home = () => {
  return (<>
    <Header/>
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente
            <br/>
            </TitleHighlight>
              o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare o seu
          novo desafio profissional, evoluindo em comunidade com os melhores experperts
        </TextContent>
        <Button title="Começar agora" variant="secondary" onclick={()=> null}/>
      </div>
      <div>
        <img src={BannerImage} alt="Imagem principal"/>
      </div>

    </Container>
    
 </>);
}

export {Home}