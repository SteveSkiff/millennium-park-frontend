import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    margin: 80px 5%;
    ${Media.phone`
    
    `}
`

const Section = styled.article`
    margin: 40px 0px;
    ${Media.phone`
    
    `}
`

const SectionTitle = styled.h2`
    font-size: 24px;
    margin: 0;
    ${Media.phone`
    
    `}
`

const SectionText = styled.div`
    font-size: 16px;
    margin: 0;
    background-color: #dedee4;
    padding: 15px;
    & ul {
        margin-bottom: 0;
        & li {
            margin: 0;
        }
    }
    & p {
        margin-bottom: 0;
    }
    ${Media.phone`
        & ul {
            & li {
                margin: 10px 0px;
            }
        }
    `}
`

export {
    SectionContainer,
    Section,
    SectionTitle,
    SectionText,
}