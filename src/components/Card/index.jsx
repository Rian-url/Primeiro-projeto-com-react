import React from "react";

import { CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture } from "./styles";

const Card = () => {
    return (

    <CardContainer>
        <ImageBackground src="https://www.ifsc.edu.br/documents/1035121/2170426/dio.png/ab47310a-b7a6-49d2-b3c1-72e88a7c99ed?t=1625144670996"/>
        <Content>
            <UserInfo>
                <UserInfo>
                    <UserPicture src="https://uploads.metropoles.com/wp-content/uploads/2022/10/18170226/Foto-com-metade-do-rosto-de-Lula-e-Bolsonaro.jpg"/>
                    <div>
                        <h4>
                            Jair Messias Inacio da Silva
                        </h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
            </UserInfo>
            <PostInfo>
                <h4>
                    Projeto para curo de HTML e CSS
                </h4>
                <p>
                    Projeto feito no curos de HTML e CSS no bootcamp dio do Global avanade... <strong>Saiba Mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>
                    #HTML #CSS #JAVASCRIPT
                </h4>
            </HasInfo>
        </Content>
    </CardContainer>
    )
}

export { Card }