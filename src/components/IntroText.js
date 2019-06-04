import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const IntroContainer = styled.article`
    padding: 0px 5%;
    margin-bottom: 0px;
    background-color: ${({category}) => 
        category === 'plan' && '#47bfa4' ||
        category === 'learn' && '#ffc20f' || 
        category === 'partner' && '#f27bb1'
    };
    ${Media.phone`


    `}
`

const IntroText = styled.p`
    font-size: 16px;
    padding: 0px;
    padding-bottom: 30px;
    line-height: 140%;
    margin-bottom: 0;
`

export {
    IntroContainer,
    IntroText,
}