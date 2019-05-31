import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const ContentListContainer = styled.section`
    margin: 40px 0px;
`

const ContentListItem = styled.article`
    display: flex;
    flex-direction: column;
`

const ContentListItemImg = styled.img`
    width: 100%;
`

const ContentListItemTextContainer = styled.div`
    margin: 20px 5%;
`

const ContentListItemTitle = styled.h2`
    font-size: 24px;
    margin: 0px;
`

const ContentListItemText = styled.p`
    font-size: 16px;
    margin: 0px;
`

const ContentListItemLink = styled.a`

`

const ContentListItemFooter = styled.p`

`

export {
    ContentListContainer,
    ContentListItem,
    ContentListItemImg,
    ContentListItemTextContainer,
    ContentListItemTitle,
    ContentListItemText,
    ContentListItemLink,
    ContentListItemFooter,

}
