import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const SectionContainer = styled.section`
    margin: 40px 5%;
`

const Section = styled.article`
    margin: 0;
`

const SectionTitle = styled.h2`
    font-size: 24px;
    margin: 0;
`

const SectionText = styled.div`
    font-size: 16px;
    margin: 0;
`

export {
    SectionContainer,
    Section,
    SectionTitle,
    SectionText,
}