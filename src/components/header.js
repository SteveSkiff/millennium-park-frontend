import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import mplogowhite from '../images/mplogo600(White).png'
import mplogoblack from '../images/mplogo600.png'

const NavContainer = styled.ul`
  justify-self: flex-end;
  align-self: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 0.3s ease;
  height: 100vh;s
  ${Media.phone`
    margin: 0;
  `}
`

const HeaderContainer = styled.header`
  background: ${props => props.background};
  position: ${props => props.position};
  z-index: 1000;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${Media.phone`
    margin: 0;
  `}
`

const LogoAndDropdownContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${Media.phone`
    margin: 0;
  `}
`

const DropdownBtn = styled.div`
  margin-left: auto;
  margin-top: 0px;
  margin-right: 20px;
  padding: 5px;
`

const NavImg = styled.img`
  width: 120px;
  padding: 10px;
  margin: 0 10px;
`

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 10px 0px 10px 0px;
`

const DropdownMenu = styled.div`
  display: block;
  position: fixed;
  transition: 0.3s ease;
  height: 100vh;
`

const MenuItem = styled.li`
  text-decoration:none;
  margin-left: 0px;
`

const MenuSubList = styled.ul`
  margin: 30px 0px;
  margin-top: 0px;
  list-style-type: none;
`

const MenuSubTitle = styled.p`
  margin: 0%;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 0px black;
`

const Underline = styled.span`
  border-bottom: 3px solid ${props => props.color};
`

const MenuSubItem = styled(MenuItem)`
  margin: 10px;
`




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
    if(!this.dropdownMenu.contains(event.target)) {
      this.setState({showMenu: false}, () => (
        document.removeEventListener('click', this.closeMenu)
      ));
    }
  }


  render() {
    return (
      <HeaderContainer position={this.state.showMenu === true ? "fixed" : "absolute"} background={this.state.showMenu === true ? "linear-gradient(to right, rgba(30, 80, 149, 1), rgba(48, 91, 160, 1), rgba(48, 91, 160, 1))" : "none"}>
        <LogoAndDropdownContainer>
          <Link to="/"><NavImg src={this.state.showMenu === true ? mplogowhite : mplogoblack} /></Link>
          <DropdownBtn onClick={this.showMenu}>{this.state.showMenu ? "\u25b2" : "\u25bc"}</DropdownBtn>
        </LogoAndDropdownContainer>
      
          <NavContainer>
          {this.state.showMenu ? 
                  ( <DropdownMenu ref={(element) => {this.dropdownMenu = element;}}>
                      <MenuList>
                          <MenuItem>
                            <MenuSubList>
                              <MenuSubTitle><Underline color={'lightgreen'}>PLAN</Underline></MenuSubTitle>
                              {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "plan") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "plan") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            <MenuSubList>
                            <MenuSubTitle><Underline color={'yellow'}>LEARN</Underline></MenuSubTitle>
                            {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "learn") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "learn") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            <MenuSubList>
                            <MenuSubTitle><Underline color={'lightpink'}>PARTNER</Underline></MenuSubTitle>
                            {this.props.navArticleData.map(article => {
                                if(article.node.data.category.uid === "partner") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                              {this.props.navContentListData.map(article => {
                                if(article.node.data.category.uid === "partner") {
                                  return (
                                    <MenuSubItem><Link to={`/${article.node.data.category.uid}/${article.node.slugs}/`}>{article.node.data.content_list_title.text}</Link></MenuSubItem>
                                  )
                                }
                              })}
                            </MenuSubList>
                            
                          </MenuItem>
                      </MenuList>
                  </DropdownMenu> )
                  :
                  (null)
          }
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
