import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from './Footer'
import "./layout.scss"

const MainContainer = styled.main`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
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
      }
    `}
    render={data => (
      <>
      
        <Header siteTitle={data.site.siteMetadata.title} />

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
