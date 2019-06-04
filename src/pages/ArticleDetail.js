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
    IntroText,
 } from '../components/IntroText'

import {
    SectionContainer,
    Section,
    SectionTitle,
    SectionText,
} from '../components/ArticleSection'





const ArticleDetail = ({data: {prismicArticle}}) => {
    const {data} = prismicArticle;

    return (
        <Layout>
            <SEO  title="Article" keywords={[`millenium park`, `chicago`, `tourism`]} />

            <PageHeroContainer>
                <PageHeroImage src={data.hero_image.url} />
                <PageHeroTitle category={data.category.uid}>{data.title.text.toUpperCase()}</PageHeroTitle>
            </PageHeroContainer>

            <IntroContainer category={data.category.uid}>
                {data.introduction_text ? <IntroText>{data.introduction_text.text}</IntroText> : (null) }
            </IntroContainer>

            <SectionContainer>
                {data.sections.map((section, key) => {
                    return (
                        <Section key={key}>
                            <SectionTitle>{section.section_title.text}</SectionTitle>
                            <SectionText category={data.category.uid} dangerouslySetInnerHTML={
                                {__html: section.section_text.html,}
                            } />
                        </Section>
                    )
                })}
            </SectionContainer>

    

        </Layout>
    )

}

export default ArticleDetail

export const ArticleQuery = graphql`
    query ArticleBySlug($uid: String!) {
        prismicArticle (uid: {eq: $uid}) {
            uid
            data {
                category {
                  uid
                }
                hero_image {
                  url
                }
                title {
                  text
                }
                introduction_text {
                  text
                }
                sections {
                  section_title {
                    text
                  }
                  section_text {
                    html
                  }
                }
            }
        }
    }
`