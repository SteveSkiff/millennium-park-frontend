import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import Media from '../components/Breakpoints'
import Seal from '../images/SealOfChi.png'

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 100px;
    background: linear-gradient(to right, rgba(30, 80, 149, 1), rgba(48, 91, 160, .9), rgba(48, 91, 160, .9));
    color: white;
    ${Media.tablet`
        grid-template-rows: 150px;
        grid-template-columns: 1fr 3fr;
    `}
`

const FooterList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: center;
    margin: 0;
    margin-right: 5%;
    flex-wrap: wrap;
    ${Media.tablet`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        margin: 0;
        flex-wrap: wrap;
    `}
`

const LogoImg = styled.img`
    padding:0;
    margin: 0;
    height: 70px;
    width: 70px;
    text-align: center;
    align-self: center;
    justify-self: center;
`

const ListItem = styled.li`
    margin: 0 10px;
    padding: 10px;
    font-size: 16px;
    list-style-type: none;
    ${Media.tablet`
        margin: 0 0px;
        padding: 5px 10px; 
    `}
` 


const Footer = () => (
    <FooterContainer>
        <LogoImg src={Seal} />
        <FooterList>
            <ListItem><Link to="/">Disclaimer</Link></ListItem>
            <ListItem><Link to="/">Privacy Policy</Link></ListItem>
            <ListItem><Link to="/">Contact Us</Link></ListItem>
            <ListItem><Link to="/">Feedback</Link></ListItem>
            <ListItem><Link to="/">Site Credits</Link></ListItem>
            <ListItem><Link to="/">Press Room</Link></ListItem>
        </FooterList>
    </FooterContainer>
)

export default Footer
