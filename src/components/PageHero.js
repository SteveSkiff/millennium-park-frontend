import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const PageHeroContainer = styled.section`
    margin: 0;
    &:before {
        position: absolute;
        content:"";
        top:0;
        left:0;
        height: 250px;
        width: 100vw;
        background-color: black;
        opacity: 0.5;
    }
    ${Media.phone`
    
    `}
`

const PageHeroTitle = styled.h1`
    font-size: 36px;
    margin: 0px;
    padding: 30px 5%;
    padding-bottom: 30px;
    margin-top: -6px;
    margin-bottom: 0;
    color: white;
    background-color: ${({category}) => 
        category === 'plan' && '#47bfa4' ||
        category === 'learn' && '#ffc20f' || 
        category === 'partner' && '#f27bb1'
    };
    width: 100%;
    ${Media.phone`
        font-size: 36px;
        padding: 30px 5%;
        margin-bottom: -1px;
        margin-top: -6px;
    `}

`


const PageHeroImage = styled.img`
    margin: 0;
    padding: 0;
    height: 250px;
    width: 100%;
    object-fit: cover;
    ${Media.phone`
        object-fit: cover;
    `}
`

export {
    PageHeroContainer,
    PageHeroTitle,
    PageHeroImage,

} 