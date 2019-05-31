import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const PageHeroContainer = styled.section`
    margin: 0;
`

const PageHeroTitle = styled.h1`
    font-size: 32px;
    margin: 50px 10px;
    margin-bottom: 0;
    ${Media.phone`
        margin: 50px 5%;
        margin-bottom: 0;
    `}
`

const PageHeroImage = styled.img`

`

export {
    PageHeroContainer,
    PageHeroTitle,
    PageHeroImage,
}