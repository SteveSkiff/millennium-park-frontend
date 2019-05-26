import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Media from '../components/Breakpoints'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentWrapper = styled.div`
    margin: 0 10%;
    margin-bottom: 50px;
    ${Media.phone`
        margin: 0 5%;
    `}
`

const PageTitle = styled.h1`
    margin: 50px 10%;
    margin-bottom: 0;
    ${Media.phone`
        margin: 50px 5%;
        margin-bottom: 0;
    `}
` 

const BreadcrumbContainer = styled.div`
    margin: 2px 10%;
    margin-bottom: 50px;
    ${Media.phone`
        margin: 0 5%;
        margin-bottom: 50px;
    `}
`

const BodyText = styled.div`
    margin: 40px 10%;
    ${Media.phone`
        margin: 40px 5%;
    `}
`


const ArticleDetail = ({data: {prismicArticle}}) => {
    const {data} = prismicArticle;

    return (
        <Layout>
            <SEO  title="Article" keywords={[`millenium park`, `chicago`, `tourism`]} />
            <PageTitle>{data.title.text.toUpperCase()}</PageTitle>
            <BodyText dangerouslySetInnerHTML={{__html: `${data.body.html}`}} />

        </Layout>
    )

}

export default ArticleDetail

export const ArticleQuery = graphql`
    query ArticleBySlug($uid: String!) {
        prismicArticle (uid: {eq: $uid}) {
            uid
            data {
                title {
                    text
                }
                body {
                    html
                }
            }
        }
    }
`