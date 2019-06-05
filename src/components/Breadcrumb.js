import React from "react"
import styled from 'styled-components'
import Media from './Breakpoints'
import { Link } from 'gatsby'

const BreadcrumbContainer = styled.div`
    padding: 0px 5%;
    margin-top: -6px;
    padding-top: 30px;
    background-color: ${({category}) => 
        category === 'plan' && '#47bfa4' ||
        category === 'learn' && '#ffc20f' || 
        category === 'partner' && '#f27bb1'
    };
    ${Media.tablet`
        padding: 0px 5%;
        margin-top: -6px;
        padding-top: 30px;
    `}
`

const BreadcrumbText = styled.p`
    margin: 0;
    mix-blend-mode: overlay;
`

const BreadcrumbLink = styled(Link)`
    cursor: pointer;
    margin: 0;
`

export {
    BreadcrumbContainer,
    BreadcrumbText,
    BreadcrumbLink
}