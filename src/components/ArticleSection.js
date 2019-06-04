import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    margin: 0px 5%;
    ${Media.phone`
        margin: 40px 0;
        &:last-child {
            margin-bottom: 0;
        }
    `}
`

const Section = styled.article`
    margin: 40px 0px;
    ${Media.phone`
        margin: 40px 0px;
        &:last-child {
            margin-bottom: 0;
        }
    `}
`

const SectionTitle = styled.h2`
    font-size: 24px;
    margin: 20px 0;
    ${Media.phone`
        margin: 20px 5%;
    `}
`

const SectionText = styled.div`
    font-size: 16px;
    padding: 2%;
    margin: 0;
    border-radius: 3px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: ${({category}) => 
        category === 'plan' && 'rgba(71,191,164, 0.1)' ||
        category === 'learn' && 'rgba(255,194,15, 0.1)' || 
        category === 'partner' && 'rgba(242,123,177, 0.1)'
    };

    & ul {
        margin-bottom: 0;
        & li {
            margin: 0;
        }
    }
    & p {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    ${Media.phone`
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        padding: 5%;
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