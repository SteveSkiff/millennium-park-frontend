import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import mpbean from '../images/mp-bean.jpg'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexContainer = styled.section`
  display: flex;
  flex-direction: row;
  ${Media.tablet`
    flex-direction: column;
  `}
`

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const IndexTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-top: -40px;
  margin-left: 10px;
  z-index: 3;
  grid-column-start: 1;
  grid-column-end: span 2;
  color: white;
`

const SectionContainer = styled.section`
  margin: 40px 10px;
`



const IndexHero = styled.section`
  text-align: center;
  background-color: blue;
  height: 200px;
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

const TileTitle = styled.p`
  /* color: red; */
  /* mix-blend-mode: hue; */
  z-index: 3;
  font-weight: 900;
  font-size: 1.5em;
  line-height: 1em;
  margin-bottom: 0;
  margin: -20px 0px;
  grid-column-start: 1;
  letter-spacing: 4px;
  /* background: linear-gradient(to top, rgba(30, 80, 149, .8), rgba(48, 91, 160, .5), rgba(48, 91, 160, 0)); */
  text-shadow: 1px 1px rgba(0, 0, 0, .2);
  ${Media.phone`
    font-size: 2em;
    /* background: linear-gradient(to top, rgba(30, 80, 149, .8), rgba(48, 91, 160, .5), rgba(48, 91, 160, 0)); */
  `}
`

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 100px;
  list-style-type: none;
  margin: 0;
  margin-left: 0px;
`
const ListItem = styled.li`
  font-size: 16px;
  margin: 10px 10px;
`

const ListLink = styled(Link)`
  background-color: orange;
  padding: 8px;
`


const IntroductionContainer = styled.section`
  margin: 80px 10px;
`

const IntroTitle = styled.h2`
 font-size: 28px;
 line-height: 1.3em;
`

const IntroText = styled.p`
  font-size: 16px;
  border-left: 5px solid black;
  padding: 5px;
  padding-left: 10px;
` 

const ColorHighlight = styled.span`
  background-color: ${props => props.color};
  padding: 5px;
`

const TileText = styled.p`
  font-size: 16px;
  margin: 0;
  grid-row-start: 2;
  place-self: center;
`

const TileImage = styled.img`
  height: 100px;
  width: 100px;
  background: lightgrey;
  grid-column-start: 1;
  grid-row-start: 2;
`

const ImgAndTextContainer = styled.div`
  display: flex;

`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`millennium park`, `chicago`, `tourism`]} />
    <HeroContainer>
      <IndexTitle>MILLENNIUM PARK</IndexTitle>
      <IndexHero />
    </HeroContainer>



    <IntroductionContainer>
      <IntroTitle><ColorHighlight color="pink">DISCOVER</ColorHighlight> AN URBAN ICON OF <ColorHighlight color="lightgreen">CULTURE</ColorHighlight></IntroTitle>
      <IntroText>A state-of-the-art collection of architecture, landscape design and art that provide the backdrop for hundreds of free cultural programs including concerts, exhibitions, tours, and family activities. In Millennium Park, you’ll find a new kind of town square – a lively, spectacular gathering spot located in the heart of the city and a destination for Chicagoans and visitors alike.</IntroText>
    </IntroductionContainer>



    <IndexContainer>
      <SectionContainer>
        <TileTitle>FIND US</TileTitle>
        <TileImage />
        <TileText>
          Millennium Park <br />
          201 E. Randolph St. <br />
          Chicago, IL 60601
        </TileText>
      </SectionContainer>


      {/* <GridArticle>
        <TileTitle>PLAN</TileTitle>

        <TileArticleList>
          {data.allPrismicArticle.edges.map(document => {
            
            if(document.node.data.category.uid === "plan") {
              return <TileArticleItem><TileArticleLink to={document.node.uid}>{document.node.data.title.text}</TileArticleLink></TileArticleItem>
            }
          
          })}
        </TileArticleList>
      </GridArticle>
      <GridArticle>
        <TileTitle>LEARN</TileTitle>
        <TileArticleList>
          {data.allPrismicArticle.edges.map(document => {
            
            if(document.node.data.category.uid === "learn") {
              return <TileArticleItem><TileArticleLink to={document.node.uid}>{document.node.data.title.text}</TileArticleLink></TileArticleItem>
            }
          
          })}
        </TileArticleList>
      </GridArticle>
      <GridArticle>
        <TileTitle>PARTNER</TileTitle>
        <TileArticleList>
          {data.allPrismicArticle.edges.map(document => {
            
            if(document.node.data.category.uid === "partner") {
              return <TileArticleItem><TileArticleLink to={document.node.uid}>{document.node.data.title.text}</TileArticleLink></TileArticleItem>
            }
          
          })}
        </TileArticleList>
      </GridArticle> */}
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
          type
          data {
            category {
              uid
            }
            title {
              text
            }
            body {
              html
            }
          }
        }
      }
    }
  }
`