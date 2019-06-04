import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
    PageHeroContainer,
    PageHeroTitle,
    PageHeroImage,
} from '../components/PageHero'

import {
    IntroContainer,
    IntroText
} from '../components/IntroText'

import {
    ContentListContainer,
    ContentListItem,
    ContentListItemImg,
    ContentListItemTextContainer,
    ContentListItemTitle,
    ContentListItemText,
    ContentListItemLink,
    ContentListFooterContainer,
    ContentListFooterText
} from '../components/ContentListItem'





const ContentListTemplate = ({data: {prismicContentList}}) => {
    const {data} = prismicContentList;

    return (
        <Layout>
            <SEO  title="Article" keywords={[`millenium park`, `chicago`, `tourism`]} />

            <PageHeroContainer>
                <PageHeroImage src={data.content_list_hero_image.url} />
                <PageHeroTitle category={data.category.uid}>{data.content_list_title.text.toUpperCase()}</PageHeroTitle>
            </PageHeroContainer>

            <IntroContainer category={data.category.uid}>
                <IntroText>{data.content_list_introduction ? data.content_list_introduction.text : null}</IntroText>
            </IntroContainer>

            <ContentListContainer>
                {data.content_list_item.map((item, key) => {
                    return (
                        <ContentListItem key={key}>
                            {item.content_list_item_image ? <ContentListItemImg src={item.content_list_item_image.url} /> : (null)}
                            <ContentListItemTextContainer>
                                <ContentListItemTitle>{item.content_list_item_title.text}</ContentListItemTitle>
                                <ContentListItemText>{item.content_list_item_text1.text}</ContentListItemText>
                                {item.content_list_item_link ? 
                                    <ContentListItemLink target="_blank" href={item.content_list_item_link.url}>Read About {item.content_list_item_title.text}</ContentListItemLink> 
                                    : 
                                    (null)
                                }
                            </ContentListItemTextContainer>
                        </ContentListItem>
                    )
                })}
            </ContentListContainer>

            {data.content_list_article_footer.html ? 
                <ContentListFooterContainer>
                    <ContentListFooterText dangerouslySetInnerHTML={
                        {__html: data.content_list_article_footer.html,}
                    } />
                </ContentListFooterContainer>
                
                :

                (null)
            }


        </Layout>
    )

}

export default ContentListTemplate

export const ContentListQuery = graphql`
    query ContentListBySlug($uid: String) {
        prismicContentList (uid: {eq: $uid}) {
            uid
            data {
                category {
                    uid
                }
                content_list_title {
                    text
                }
                content_list_introduction {
                    text
                }
                content_list_hero_image {
                    url
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
                    content_list_item_link {
                        url
                    }
                }
                content_list_article_footer {
                    html
                }
            }
        }
    }
`