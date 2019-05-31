import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import { graphql } from 'gatsby'

import mpbean from '../images/mphero.jpg'
import fbicon from "../images/icon_fb.svg"
import mpmap from '../images/mpmap.jpg'


import Layout from "../components/layout"
import SEO from "../components/seo"

import {
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
} from '../components/IndexSection'

const IndexContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0;
  ${Media.tablet`
    flex-direction: column;
  `}
`

const HeroContainer = styled.div`
  position: relative;
`

const IndexTitle = styled.h1`
  position: absolute;
  font-size: 55px;
  font-weight: bold;
  bottom: 1%;
  left: 0;
  margin-left: 5%;
  line-height: 42px;
  z-index: 3;
  color: white;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.4);
`

const IndexHero = styled.section`
  text-align: center;
  background-color: blue;
  height: 100vh;
  width: 100%;
  background-image: url("${mpbean}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 45% 30%;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: span 2;
  ${Media.tablet`
  `}
`

const IntroductionContainer = styled.section`
  padding: 100px 5%;
  margin: 0;
  background: ${props => props.color};
`

const IntroTitle = styled.h2`
 font-size: 32px;
 line-height: 1.3em;
`

const IntroText = styled.p`
  font-size: 16px;
  margin: 0;
` 




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`millennium park`, `chicago`, `tourism`]} />
    <HeroContainer>
      <IndexTitle>MILLENNIUM PARK</IndexTitle>
      <IndexHero />
    </HeroContainer>



    <IntroductionContainer color={"linear-gradient(to right, #bcbdc1, #d3d5df)"}>
      <IntroTitle><ColorHighlight color="linear-gradient(to right, #f27bb1, #ff9fcb)">DISCOVER</ColorHighlight> AN URBAN ICON OF <ColorHighlight color="linear-gradient(to right, #68bfab, #7fd9c5)">CULTURE</ColorHighlight></IntroTitle>
      <IntroText>A state-of-the-art collection of architecture, landscape design and art that provide the backdrop for hundreds of free cultural programs including concerts, exhibitions, tours, and family activities. In Millennium Park, you’ll find a new kind of town square – a lively, spectacular gathering spot located in the heart of the city and a destination for Chicagoans and visitors alike.</IntroText>
    </IntroductionContainer>


    <IndexContainer>

      <SectionContainer color={"linear-gradient(to right, #3fc8f4, #74ddff)"}>
        <SectionTitle>FIND US</SectionTitle>

        <SectionSubTextContainer>
          <SubImage src={mpmap} />
          <SubText margin={"left"}>Millennium Park <br />
          201 E. Randolph St. <br />
          Chicago, IL 60601</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle>From the CTA:</SubTextTitle>
          <SubText>Walk east from the Washington/Wabash 'L' stop.
          Served by buses 3, 4, 6, J14, 20, 56, 60, 124, 146, 147, 151, 157.</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle>If You're Driving:</SubTextTitle>
          <SubText>We've got several parking garages for guests to choose from. <ExternalLink href="https://www.millenniumgarages.com/">Learn more</ExternalLink> and pay online to save up to 50% on parking rates!</SubText>
        </SectionSubTextContainer>
      </SectionContainer>

      <SectionContainer color={"linear-gradient(to right, #7796cd, #86a6e0)"}>
        <SectionTitle>VISIT US</SectionTitle>

        <SectionSubTextContainer>
          <SubText><strong>Admission is FREE for all guests!</strong> <br />Escape the city noise every day between 6AM and 11PM.
          Our Welcome Center is open daily from 9AM to 5PM for any questions you may have about the park.</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer>
          <SectionLinks>
            {data.allPrismicArticle.edges.map(article => {
              if(article.node.data.category.uid === "plan") {
                return (
                  <SectionLinkItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.title.text} &#9656;</Link></SectionLinkItem>
                )
              }
            })}

          </SectionLinks>
        </SectionSubTextContainer>
      </SectionContainer>

      <SectionContainer color={"linear-gradient(to right, #f7a13a, #ffa840)"}>
          <SectionTitle>CONTACT US</SectionTitle>

          <SectionSubTextContainer>
            <SubText><ExternalLink>312.742.1168</ExternalLink> <br />
            <ExternalLink mailto='dcase@cityofchicago.org'>dcase@cityofchicago.org</ExternalLink></SubText>
          </SectionSubTextContainer>

          <SectionSubTextContainer>
          <SectionLinks>
            <SectionLinkItem><SocialIcon src={fbicon} /></SectionLinkItem>
          </SectionLinks>
        </SectionSubTextContainer>
      </SectionContainer>

    </IndexContainer>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allPrismicArticle {
      edges {
        node {
          uid
          slugs
          data {
            category {
              uid
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`