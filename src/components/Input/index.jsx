import React from "react";

import { IconContainer, InputContainer, InpuText } from "./style";

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <InpuText {...rest} />
        </InputContainer>
    )
}

export { Input };