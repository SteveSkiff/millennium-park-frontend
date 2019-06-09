import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'
import { Link } from "gatsby"


const APContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

`

const APItem = styled.article`
    background-image: url(${props => props.image});
    background-size: cover;
    height: 200px;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    z-index: 2;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    &:before {
        position: absolute;
        content:"";
        top:0;
        left:0;
        height: 200px;
        width: 100%;
        background-color: black;
        opacity: 0.5;
        cursor: pointer;
    }
    &:hover {
        ::before {
            transition: 0.2s ease;
            opacity: 0.0;
            cursor: pointer;
        }
    }
`

const APItemWrapper = styled(Link)`
    width: 25%;
    height: 200px;
    margin: 0;
    padding: 0;
    color: white;
    mix-blend-mode: normal;
    &:hover {
        text-decoration: none;
    }
    ${Media.phone`
        width: 50%;
    `}
`

const APTitle = styled.h4`
    align-self: center;
    margin: 0;
    z-index: 3;
    cursor: pointer;
    ${Media.phone`
        font-size: 16px;
        width: 70%;
    `}
`

export {
    APContainer,
    APItem,
    APItemWrapper,
    APTitle,
}