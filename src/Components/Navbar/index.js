import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    Navbarcontainer, 
    Navlogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';


const Navbar = () => {
    return (
       <>
       <Nav>
          <Navbarcontainer>
              <Navlogo to="/"> Domble
              </Navlogo>

              <MobileIcon> 
                  <FaBars/>
              </MobileIcon>

              <NavMenu>

                  <NavItem>
                      <NavLinks to = "about"> About </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "discover"> Discover </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "services"> Services </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "signup"> Sign up</NavLinks>
                  </NavItem>

              </NavMenu>

              <NavBtn>
                  <NavBtnLink to='/signin'> Sign In</NavBtnLink>
              </NavBtn>
            </Navbarcontainer>
        </Nav>

       </>
    );
}

export default Navbar;
