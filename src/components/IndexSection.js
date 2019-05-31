import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    padding: 80px 40px;
    background: ${props => props.color};
    ${Media.phone`
        margin: 0px 0;
        padding: 80px 5%;
    `}
`

const SectionTitle = styled.h3`
    font-size: 28px;
`

const SectionIntro = styled.p`

`

const SectionLinks = styled.ul`
    /* display: flex;
    flex-wrap: wrap; */
    list-style-type: none;
    margin: 10px 0px;
    padding: 0px 10px;
    border-left: 5px solid white;
`

const SectionLinkItem = styled.li`
    padding: 5px;
    margin: 0 10px;
    margin-left: 0;
`

const ColorHighlight = styled.span`
  background: ${props => props.color};
  padding: 5px;
`

const SectionSubTextContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction === "column" ? "column" : "row"};
    
`

const SubImage = styled.img`
    height: 150px;
    width: 150px;
    background-color: pink;
    margin: 0;
`

const SocialIcon = styled.img`
    height: 50px;
    width: 50px;
    padding: 0;
    margin: 0;
    background-color: red;
`
const SubTextContainer = styled.div`

`

const SubTextTitle = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 20px;
    margin-top: 20px;
`

const SubText = styled.p`
    align-self: center;
    margin: 0%;
    margin-left: ${props => props.margin === "left" ? "20px" : "0px"};
`

const ExternalLink = styled.a`
    font-weight: bold;
`

const SectionSubContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 0;
    margin-bottom: -5px;
    margin-right: 5px;
`

export {
    SectionContainer,
    SectionTitle,
    SectionIntro,
    SectionLinks,
    SectionLinkItem,
    ColorHighlight,
    SectionSubTextContainer,
    SubTextContainer,
    SubImage,
    Icon,
    SubTextTitle,
    SubText,
    ExternalLink,
    SectionSubContainer,
}
