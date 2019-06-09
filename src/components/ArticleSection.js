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
    display: flex;
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
    width: 100%;
    font-size: 16px;
    padding: 2%;
    margin: 0;
    border-radius: 3px;
    font-weight: 400;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: ${({category}) => 
        category === 'plan' && 'rgba(71,191,164, 0.1)' ||
        category === 'learn' && 'rgba(255,194,15, 0.1)' || 
        category === 'partner' && 'rgba(242,123,177, 0.1)'
    };

    & ul {
        opacity: 0.8;
        margin-bottom: 0;
        & li {
            margin: 0;
            & a {
            color: blue;
            font-weight: 400;
            &:hover {
                color: darkblue;
            }
        }

        }
    }
    & p {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        & a {
            color: blue;
            font-weight: 400;
            &:hover {
                color: darkblue;
            }
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

const SectionTextContainer = styled.div`
    margin: 0;
`

const SectionImage = styled.img`
    height: 200px;
    width: 200px;
    padding: 0%;
    margin: auto 0;
    margin-right: 20px;
    border-radius: 5px;
    background-size: cover;
    background-image: ${props => props.src};
`

export {
    SectionContainer,
    Section,
    SectionTitle,
    SectionText,
    SectionTextContainer,
    SectionImage
}