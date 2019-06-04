import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from './Footer'
import "./layout.scss"
import colorbackground from '../images/greyprism.svg'

const MainContainer = styled.main`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;   
    width: 100%;
    height: 100%;
    background-image: url(${colorbackground});
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allPrismicArticle {
          edges {
            node {
              uid
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
        allPrismicContentList {
          edges {
            node {
              uid
              data {
                category {
                  uid
                }
                content_list_title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
      
        <Header siteTitle={data.site.siteMetadata.title} navArticleData={data.allPrismicArticle.edges} navContentListData={data.allPrismicContentList.edges} />

        <MainContainer>{children}</MainContainer>

        <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
