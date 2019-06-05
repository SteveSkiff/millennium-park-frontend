import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.article`
    padding: 80px 40px;
    background: ${props => props.color};
    min-height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50vw;
    ${Media.phone`
        margin: 0px 0;
        padding: 80px 5%;
        max-width: 100vw;
    `}
`

const SectionTitle = styled.h3`
    font-size: 28px;
    margin-bottom: 15px;
    color: ${props => props.color};
    line-height: 1rem;
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
    cursor: pointer;
    &::before {
        content: "";
        margin: 0;
    }
`

const ColorHighlight = styled.span`
  background: ${props => props.color};
  padding: 5px;
  color: white;
`

const SectionSubTextContainer = styled.section`
    display: flex;
    flex-direction: ${props => props.direction === "column" ? "column" : "row"};
    width: 100%;
    
`

const SubImage = styled.img`
    height: 150px;
    width: 150px;
    margin: 0;
`

const SubTextContainer = styled.div`

`

const SubTextTitle = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 20px;
    margin-top: 20px;
    color: ${props => props.color};
`

const SubText = styled.p`
    align-self: center;
    margin: 0%;
    margin-left: ${props => props.margin === "left" ? "20px" : "0px"};
`

const ExternalLink = styled.a`
    font-size: 16px;
    cursor: pointer; 
`

const SectionSubContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
`

const Icon = styled.img`
    display: inline-block;
    height: ${props => props.type === "social" ? '40px' : '20px'};
    width: ${props => props.type === "social" ? '40px' : '20px'};
    margin: 0;
    margin-bottom: 0px;
    margin-right: 10px;
    filter: invert(100%);
    mix-blend-mode: overlay;
    opacity: 1;
    ${Media.phone`
        height: ${props => props.type === "social" ? '50px' : '20px'};
        width: ${props => props.type === "social" ? '50px' : '20px'};
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
