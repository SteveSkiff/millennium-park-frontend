import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const ContentListContainer = styled.section`
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    ${Media.phone`
        margin: 40px 0;
        flex-direction: column;
    `}
`

const ContentListItem = styled.article`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 40px 5%;
    ${Media.phone`
        flex-direction: column;
        width: 100%;
        margin: 40px 0;
    `}
`

const ContentListItemImg = styled.img`
    width: 100%;
    margin: 0;
    height: 150px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0, 0.1), 0px 0px 5px 0px rgba(0,0,0, 0.3);
    ${Media.phone`
        width: 100%;
        height: 150px;
        object-fit: cover;
    `}
`

const ContentListItemTextContainer = styled.div`
    padding: 0px;
    padding-left: 15px;
    ${Media.phone`
        margin: 20px 5%;
        padding: 0;
    `}
`

const ContentListItemTitle = styled.h2`
    font-size: 22px;
    margin: 0px;
    margin-top: 10px;
    ${Media.phone`
        font-size: 24px;
        margin: 0px;
    `}
`

const ContentListItemText = styled.p`
    font-size: 16px;
    margin: 0px;
    ${Media.phone`
        margin-bottom: 40px;
    `}
`

const ContentListItemLink = styled.a`
    ${Media.phone`
    
    `}
`

const ContentListItemFooter = styled.p`
    ${Media.phone`
    
    `}
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
