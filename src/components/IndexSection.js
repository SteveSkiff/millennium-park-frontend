import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    margin: 0px 0;
    padding: 80px 5%;
    background: ${props => props.color};
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
    border-left: 5px solid black;
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
    border-bottom: 5px solid white;
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
    SocialIcon,
    SubTextTitle,
    SubText,
    ExternalLink,
}
