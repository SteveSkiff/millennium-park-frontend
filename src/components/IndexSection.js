import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    padding: 80px 40px;
    background: ${props => props.color};
    min-height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Media.phone`
        margin: 0px 0;
        padding: 80px 5%;
    `}
`

const SectionTitle = styled.h3`
    font-size: 28px;
    margin-bottom: 15px;
`

const SectionIntro = styled.p`

`

const SectionLinks = styled.ul`
    display: flex;
    flex-direction: ${props => props.direction};
    list-style-type: none;
    margin: 10px 0px;
    padding: 0px;
    margin-bottom: 0;
`

const SectionLinkItem = styled.li`
    padding: 5px 0px;
    margin: 0 10px;
    margin-left: 0;
    font-size: 16px;
`

const ColorHighlight = styled.span`
  background: ${props => props.color};
  padding: 5px;
  color: white;
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
    font-size: 16px;
`

const SectionSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
`

const Icon = styled.img`
    display: inline-block;
    height: ${props => props.type === "social" ? '40px' : '30px'};
        width: ${props => props.type === "social" ? '40px' : '30px'};
    margin: 0;
    margin-bottom: -5px;
    margin-right: 5px;
    mix-blend-mode: overlay;
    ${Media.phone`
        height: ${props => props.type === "social" ? '50px' : '30px'};
        width: ${props => props.type === "social" ? '50px' : '30px'};
    `}
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
