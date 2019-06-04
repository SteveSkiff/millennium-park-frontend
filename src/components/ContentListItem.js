import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'

const ContentListContainer = styled.section`
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;

    ${Media.phone`
        margin: 0px 0;
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
        margin: 0px 0;
        padding-bottom: 40px;
        $:last-child {
            margin-bottom: 0;
        }
    `}
`

const ContentListItemImg = styled.img`
    width: 100%;
    margin: 0;
    height: 200px;
    object-fit: cover;
    box-shadow: 0px 1px 0px 1px rgba(0,0,0, 0.1), 0px 1px 4px 0px rgba(0,0,0, 0.3);
    border-radius: 3px;
    ${Media.phone`
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0;
    `}
`

const ContentListItemTextContainer = styled.div`
    padding: 0px 15px;
    ${Media.phone`
        margin: 0px 5%;
        padding: 0;
    `}
`

const ContentListItemTitle = styled.h2`
    font-size: 22px;
    margin: 10px 0px;
    margin-top: 20px;
    ${Media.phone`
        font-size: 24px;
        margin: 20px 0px;
    `}
`

const ContentListItemText = styled.p`
    font-size: 16px;
    line-height: 140%;
    margin: 0px;
    margin-bottom: 10px;
    ${Media.phone`
        margin-bottom: 20px;
    `}
`

const ContentListItemLink = styled.a`
    background: linear-gradient(to right, rgba(30, 80, 149, 1), rgba(48, 91, 160, .9), rgba(48, 91, 160, .9));
    padding: 4px 8px;
    border-radius: 3px;
    ${Media.phone`
        padding: 8px 16px;
    `}
`

const ContentListFooterContainer = styled.article`
    margin: 40px 3%;
    padding: 2%;
    background-color: #dedee4;
    ${Media.phone`
        margin: 40px 0;
        padding: 5%
    `}
`

const ContentListFooterText = styled.p`
    margin: 0%;
    & h3, h4 {
        margin: 0;
    }
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
    ContentListFooterContainer,
    ContentListFooterText,

}
