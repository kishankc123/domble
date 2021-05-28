import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    Navbarcontainer, 
    Navlogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
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
                      <NavLinks to = "home"> Home </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "about"> About us </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "dashboard"> Dashboard</NavLinks>
                  </NavItem>

              </NavMenu>

            </Navbarcontainer>
        </Nav>

       </>
    );
}

export default Navbar;
