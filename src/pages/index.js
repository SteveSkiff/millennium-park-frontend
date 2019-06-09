import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import mapicon from "../images/icon_map.png"
import busicon from '../images/icon_bus.png'
import phoneicon from '../images/icon_phone.png'
import mpmap from '../images/mpmap.jpg'

import yticon from '../images/icon_yt.png'
import fbicon from '../images/icon_fb.png'
import twicon from '../images/icon_tw.png'
import igicon from '../images/icon_ig.png'

import {
  APContainer,
  APItem,
  APTitle,
  APItemWrapper,
} from '../components/ArticlePreview'


import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  SectionContainer,
  SectionTitle,
  SectionLinks,
  SectionLinkItem,
  ColorHighlight,
  SectionSubTextContainer,
  SubImage,
  Icon,
  SubTextTitle,
  SubText,
  ExternalLink,
  SectionSubContainer
} from '../components/IndexSection'

const IndexContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0;
  /* margin: 5%; */
  /* box-shadow: 0px 0px 0px 1px rgba(0,0,0, 0.1), 0px 0px 5px 0px rgba(0,0,0, 0.3); */
  ${Media.phone`
    flex-direction: column;
    margin: 0;
  `}
`

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  ${Media.phone`
    position: relative;
    height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
  `}
`

const IndexTitle = styled.h1`
  position: absolute;
  font-size: 65px;
  font-weight: bold;
  bottom: 1%;
  left: 0;
  margin-left: 5%;
  line-height: 42px;
  z-index: 3;
  color: white;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.4);

  ${Media.phone`
    font-size: 55px;
  `}
`

const IndexHeroImg = styled(Img)`
  width: 105%;
  margin-top: -25%;
  margin-left: -5%;
  ${Media.phone`
    width: 100%;
    display: block;
    margin: 0;
  `}
`

const IntroductionContainer = styled.section`
  padding: 80px 5%;
  margin: 0px;
  background: ${props => props.color};
  /* box-shadow: 0px 0px 0px 1px rgba(0,0,0, 0.1), 0px 0px 5px 0px rgba(0,0,0, 0.3); */
  ${Media.phone`

  `}
`

const IntroTitle = styled.h2`
 font-size: 32px;
 line-height: .8em;
 color: white;
 ${Media.phone`
  line-height: 1.3em;
 `}
`

const IntroText = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.3em;
  ${Media.phone`
    line-height: 1.5em;
  `}
` 




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`millennium park`, `chicago`, `tourism`]} />
    <HeroContainer>
      <IndexTitle>MILLENNIUM PARK</IndexTitle>
      <IndexHeroImg fluid={data.fileName.childImageSharp.fluid} />
    </HeroContainer>



    <IntroductionContainer color={"linear-gradient(to right, #bcbdc1, #d3d5df)"}>
      <IntroTitle><ColorHighlight color="linear-gradient(to right, #f27bb1, #ff9fcb)">DISCOVER</ColorHighlight> AN URBAN ICON OF <ColorHighlight color="linear-gradient(to right, #68bfab, #7fd9c5)">CULTURE</ColorHighlight></IntroTitle>
      <IntroText>A state-of-the-art collection of architecture, landscape design and art that provide the backdrop for hundreds of free cultural programs including concerts, exhibitions, tours, and family activities. In Millennium Park, you’ll find a new kind of town square – a lively, spectacular gathering spot located in the heart of the city and a destination for Chicagoans and visitors alike.</IntroText>
    </IntroductionContainer>


    <IndexContainer>

      <SectionContainer color={"linear-gradient(to right, #ef59a1, #f27bb1)"}>
        <SectionTitle color={"#ffbdff"} ><Icon src={mapicon} />FIND US</SectionTitle>

        <SectionSubTextContainer>
          <SubImage src={mpmap} />
          <SubText margin={"left"}>Millennium Park <br />
          201 E. Randolph St. <br />
          Chicago, IL 60601</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle color={"#ffbdff"}>From the Trains:</SubTextTitle>
          <SubText>Walk east from the Washington/Wabash 'L' stop.
          For more information on 'L' lines and schedules, <ExternalLink target='_blank' href="https://www.transitchicago.com/schedules/">find out more here.</ExternalLink></SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle color={"#ffbdff"}>If You're Driving</SubTextTitle>
          <SubText>We've got several parking garages for guests to choose from. <ExternalLink target="_blank" href="https://www.millenniumgarages.com/">Learn more</ExternalLink> and pay online to save up to 50% on parking rates!</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle color={"#ffbdff"}>By Bus</SubTextTitle>
          <SubText>The park is accessable and served by buses 3, 4, 6, J14, 20, 56, 60, 124, 146, 147, 151, 157. For bus schedules by line, <ExternalLink target="_blank" href='https://www.transitchicago.com/schedules/'>click here.</ExternalLink></SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer direction={"column"}>
          <SubTextTitle color={"#ffbdff"}>Via Bike</SubTextTitle>
          <SubText>Accessable via the Lakefront Trail, located one block east. Bike parking is available along the edges of the park. For Divvy riders, we have a parking station located on the southwest corner of the park on Michigan Ave. Learn more about the Divvy program <ExternalLink target="_blank" href='https://www.divvybikes.com'>here.</ExternalLink></SubText>
        </SectionSubTextContainer>
      </SectionContainer>

    

      <SectionSubContainer>

      <SectionContainer color={"linear-gradient(to right, #5879bc, #86a6e0)"}>
        <SectionTitle color={"#cdffff"}><Icon src={busicon} />VISIT US</SectionTitle>

        <SectionSubTextContainer>
          <SubText><strong>Admission is FREE for all guests!</strong> <br />Escape the city noise every day between 6AM and 11PM.
          Our Welcome Center is open daily from 9AM to 5PM for any questions you may have about the park.</SubText>
        </SectionSubTextContainer>

        <SectionSubTextContainer>
          <SectionLinks direction="column">
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

      <SectionContainer color={"linear-gradient(to right, #058464, #06af84)"}>
          <SectionTitle color={"#00ffdf"}><Icon src={phoneicon} />CONTACT US</SectionTitle>

          <SectionSubTextContainer>
            <SubText><ExternalLink href="tel:3127421168">312.742.1168</ExternalLink> <br />
            <ExternalLink href='mailto:dcase@cityofchicago.org'>dcase@cityofchicago.org</ExternalLink></SubText>
          </SectionSubTextContainer>

          <SectionSubTextContainer>
          <SectionLinks direction="row">
            <SectionLinkItem><ExternalLink target="_blank" href="https://www.facebook.com/MillenniumParkChicago/"><Icon type='social'  src={fbicon}/></ExternalLink></SectionLinkItem>
            <SectionLinkItem><ExternalLink target="_blank" href="https://twitter.com/millennium_park"><Icon type='social' src={twicon}/></ExternalLink></SectionLinkItem>
            <SectionLinkItem><ExternalLink target="_blank" href="https://www.instagram.com/millennium_park/"><Icon type='social' src={igicon}/></ExternalLink></SectionLinkItem>
            <SectionLinkItem><ExternalLink target="_blank" href="https://www.youtube.com/user/ChicagoCultureEvents"><Icon type='social'  src={yticon}/></ExternalLink></SectionLinkItem>
          </SectionLinks>
        </SectionSubTextContainer>
      </SectionContainer>

      </SectionSubContainer>


    </IndexContainer>

    <APContainer>
      {data.allPrismicArticle.edges.map( article => {
        return (
          <APItemWrapper to={`/${article.node.data.category.uid}/${article.node.uid}/`}>
            <APItem image={article.node.data.hero_image.url} >
              <APTitle>{article.node.data.title.text} </APTitle>
            </APItem>
          </APItemWrapper>
        )
      })}
    </APContainer>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    fileName: file(relativePath: {eq: "mphero.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 7000, maxHeight: 7000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allPrismicArticle {
      edges {
        node {
          uid
          slugs
          data {
            hero_image {
              url
            }
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