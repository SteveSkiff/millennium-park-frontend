import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Media from '../components/Breakpoints'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTitle = styled.h1`
    margin: 50px 10%;
    margin-bottom: 0;
    ${Media.phone`
        margin: 50px 5%;
        margin-bottom: 0;
    `}
` 


const ContentListTemplate = ({data: {prismicContentList}}) => {
    const {data} = prismicContentList;

    return (
        <Layout>
            <SEO  title="Article" keywords={[`millenium park`, `chicago`, `tourism`]} />
            <PageTitle>{data.content_list_title.text.toUpperCase()}</PageTitle>

        </Layout>
    )

}

export default ContentListTemplate

export const ContentListQuery = graphql`
    query ContentListBySlug($uid: String) {
        prismicContentList (uid: {eq: $uid}) {
            uid
            data {
                content_list_title {
                    text
                }
                content_list_introduction {
                    text
                }
                content_list_item {
                    content_list_item_image {
                        url
                    }
                    content_list_item_title {
                        text
                    }
                    content_list_item_text1 {
                        text
                    }
                }
            }
        }
    }
`