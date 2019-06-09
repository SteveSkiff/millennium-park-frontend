import { Link } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import mplogowhite from '../images/mplogo600(White).png'

import {
  slideDown,
  fadeIn,
  fadeOut,
  fadeInNav,
  fadeOutNav
} from './Animations'

const NavContainer = styled.nav`
  justify-self: flex-end;
  align-self: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 0.4s ease;
  height: ${props => props.state === 'visible' ? "340px" : " 340px"};
  margin-bottom: 0;
  position: relative;
  ${Media.phone`
    margin: 0;
    justify-self: flex-end;
    align-self: left;
    display: flex;
    visibility: {props => props.state};
    flex-direction: column;
    flex-wrap: wrap;
    transition: 0.4s ease;
    height: ${props => props.state === 'visible' ? "100vh" : "100vh"};
    z-index: -10;
  `}
`

const NavImage = styled(Img)`
  bottom: -28%;
  position: absolute !important;
  left: 0;
  z-index: 2;
  height: ${props => props.state === 'visible' ? "100%" : "0%"};
  width: 100%;
  padding: 0;
  opacity: ${props => props.state === 'visible' ? "0.2" : "0"};
  /* animation: ${props => props.state === 'visible' ? fadeInNav : fadeOutNav} 0.5s ease-out; */
  transition: height 1s 0.3s ease-out;
  filter: blur(5px);
  & picture > img {
    /* height: 100%; */
    /* object-position: 10% 10% !important; */
    ${Media.phone`
      /* object-position: center center !important; */
      filter: blur(2px);
    `}
  }
  ${Media.phone`
    opacity: 0.2;
    min-width: 200px;
    bottom: 0%;
    left: 0;
    height: ${props => props.state === 'visible' ? "70%" : "0%"};
    transition: height 1s 0.3s ease-out;
  `}
`

const HeaderContainer = styled.header`
  background: ${props => props.background};
  transition: 0.4s ease;
  position: absolute;
  z-index: 1000;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto; /* was auto */
  height: ${props => props.state === 'visible' ? "433px" : "0px"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${Media.phone`
    margin: 0;
    background: ${props => props.background};
    position: ${props => props.position};
    height: ${props => props.state === 'visible' ? "100vh" : "0vh"};
    transition: 0.4s ease;
    z-index: 1000;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `}
`

const LogoAndDropdownContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 94px;
  justify-content: space-between;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100px;
  ${Media.phone`
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
    height: 100px;
  `}
`

const DropdownBtn = styled.div`
  margin-left: auto;
  margin-top: 0px;
  margin-right: 20px;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: 0.2s ease;
  ${Media.phone`

  `}
`

const NavLogoImg = styled.img`
  width: 120px;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  ${Media.phone`
  
  `}
`

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 10px 0px 10px 0px;
  /* visibility: ${props => props.state === 'visible' ? "visible" : "hidden"}; */
  max-height: ${props => props.state === 'visible' ? "500px" : "0px"};
  opacity: 1;
  overflow: hidden;
  animation: ${props => props.state === 'visible' ? fadeIn : fadeOut} 0.4s ease-in;
  transition: max-height 0.2s ease-in;
  padding-top: 100px;
  ${Media.phone`
    list-style-type: none;
    display: flex;
    margin: 10px 0px 10px 0px;
    opacity: 1;
    padding-top: 100px;
    max-height: ${props => props.state === 'visible' ? "100vh" : "0vh"};
  `}
`

const DropdownMenu = styled.div`
  display: block;
  transition: 0.2s ease;
  height: auto;
  margin-left: 20px;
  z-index: 3;
  ${Media.phone`
    display: block;
    transition: 0.2s ease;
    height: 85vh;
    margin-left: 5%;
  `}
`

const MenuItem = styled.li`
  text-decoration:none;
  display: flex;
  margin-left: 0px;
  &::before {
    content: "";
    margin: 0;
  }
  ${Media.phone`
    flex-direction: column;
    padding-left: 0;
    margin-left: 0;
  `}
`

const MenuSubList = styled.ul`
  margin: 30px 0px;
  margin-top: 0px;
  margin-right: 60px;
  list-style-type: none;
  &::before {
    list-style: none;
    padding: 0;
  }
  ${Media.phone`
    margin: 5px 0px;
    margin-right: 0;
  `}
`

const MenuSubTitle = styled.p`
  margin: 0%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 0px black;
  ${Media.phone`
    margin: 0%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 0px black;
  `}
`

const Underline = styled.span`
  border-bottom: 5px solid ${props => props.color};
  ${Media.phone`
  
  `}
`

const MenuSubItem = styled(MenuItem)`
  margin: 0px;
  padding-left: 0;
  & a {
    opacity: 1;
    color: white;
  }
  ${Media.phone`
    margin: 5px;
    margin-left: 0;
  `}
`

const ActiveStyle = {
  fontWeight: "bold",
  color: "#3fc8f4"
};




class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this)

  }

  showMenu(event) {
    event.preventDefault();

    this.setState({showMenu: true}, () => (
      document.addEventListener('click', this.closeMenu)
    ));
  }

  closeMenu(event) {

    if(this.dropdownMenu) {
      if(!this.dropdownMenu.contains(event.target)) {
        this.setState({showMenu: false}, () => (
          document.removeEventListener('click', this.closeMenu)
        ));
      }
    }

  }

 
  render() {
    return (
      <HeaderContainer state={this.state.showMenu === true ? "visible" : "hidden"} position={this.state.showMenu === true ? "fixed" : "absolute"} background="linear-gradient(to right, rgba(30, 80, 149, 1), rgba(48, 91, 160, 1), rgba(48, 91, 160, 1))">
        <LogoAndDropdownContainer>
          <Link to="/"><NavLogoImg src={mplogowhite} /></Link>
          <DropdownBtn onClick={this.showMenu}>{this.state.showMenu ? "\u25b2" : "\u25bc"}</DropdownBtn>
        </LogoAndDropdownContainer>
      
          <NavContainer state={this.state.showMenu === true ? "visible" : "hidden"}>
          <NavImage state={this.state.showMenu === true ? "visible" : "hidden"} fluid={this.props.navImage} />
          <DropdownMenu state={this.state.showMenu === true ? "visible" : "hidden"} ref={(element) => {this.dropdownMenu = element}}>
                      <MenuList state={this.state.showMenu === true ? "visible" : "hidden"}>
                          <MenuItem>
                            <MenuSubList>
                              <MenuSubTitle><Underline color={'#47bfa4'}>PLAN</Underline></MenuSubTitle>
                              {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "plan") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "plan") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            <MenuSubList>
                            <MenuSubTitle><Underline color={'#ffc20f'}>LEARN</Underline></MenuSubTitle>
                            {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "learn") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "learn") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            <MenuSubList>
                            <MenuSubTitle><Underline color={'#f27bb1'}>PARTNER</Underline></MenuSubTitle>
                            {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "partner") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "partner") {
                                  return (
                                    <MenuSubItem><Link exact={true} activeStyle={ActiveStyle} to={`/${article.node.data.category.uid}/${article.node.uid}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            
                          </MenuItem>
                      </MenuList>
                  </DropdownMenu> 
        </NavContainer>
      </HeaderContainer>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
