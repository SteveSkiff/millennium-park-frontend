import React from "react"
import { graphql, Link } from 'gatsby'
import Media from '../components/Breakpoints'

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
    PageHeroContainer,
    PageHeroTitle,
    PageHeroImage,
} from '../components/PageHero'

import {
    ContentListContainer,
    ContentListItem,
    ContentListItemImg,
    ContentListItemTextContainer,
    ContentListItemTitle,
    ContentListItemText,
    ContentListItemLink,
    ContentListItemFooter,
} from '../components/ContentListItem'





const ContentListTemplate = ({data: {prismicContentList}}) => {
    const {data} = prismicContentList;

    return (
        <Layout>
            <SEO  title="Article" keywords={[`millenium park`, `chicago`, `tourism`]} />

            <PageHeroContainer>
                <PageHeroTitle>{data.content_list_title.text.toUpperCase()}</PageHeroTitle>
            </PageHeroContainer>

            <ContentListContainer>
                {data.content_list_item.map((item, key) => {
                    return (
                        <ContentListItem key={key}>
                            {item.content_list_item_image ? <ContentListItemImg src={item.content_list_item_image.url} /> : (null)}
                            <ContentListItemTextContainer>
                                <ContentListItemTitle>{item.content_list_item_title.text}</ContentListItemTitle>
                                <ContentListItemText>{item.content_list_item_text1.text}</ContentListItemText>
                                {item.content_list_item_link ? <ContentListItemLink href={item.content_list_item_link.url}>Click Here</ContentListItemLink> : (null)}
                            </ContentListItemTextContainer>
                        </ContentListItem>
                    )
                })}
            </ContentListContainer>


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