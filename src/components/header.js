import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Media from '../components/Breakpoints'
import mplogo from '../images/mplogo600(White).png'

const NavContainer = styled.ul`
  justify-self: flex-end;
  align-self: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 0.3s ease;
  ${Media.phone`
    margin: 0;
  `}
`

const HeaderContainer = styled.header`
  background: linear-gradient(to right, rgba(30, 80, 149, 1), rgba(48, 91, 160, .9), rgba(48, 91, 160, .9));
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
  transition: 0.3s ease;
`

const MenuItem = styled.li`
  text-decoration:none;
  margin-left: 20px;
`

const LinkStyle = {
  
}



class Header extends React.Component {

  constructor() {
    super();

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
      <HeaderContainer>
        <LogoAndDropdownContainer>
          <Link to="/"><NavImg src={mplogo} /></Link>
          <DropdownBtn onClick={this.showMenu}>&#9660;</DropdownBtn>
        </LogoAndDropdownContainer>
      
          <NavContainer>
          {this.state.showMenu ? 
                  ( <DropdownMenu ref={(element) => {this.dropdownMenu = element;}}>
                      <MenuList>
                        <MenuItem><Link>Plan</Link></MenuItem>
                        <MenuItem><Link>Learn</Link></MenuItem>
                        <MenuItem><Link>Partner</Link></MenuItem>
                        <MenuItem><Link>Contact</Link></MenuItem>
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
