import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'  //For importing Link
import {Link as LinkScroll} from 'react-scroll' // For scroll in Nav Menu

//exporting to the tags in index page

export const Nav = styled.nav` 
background: #000;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
position:sticky;
top: 0;
z-index:10;
background-color: #2B6777;
@media screen and (max-width:9600px){
    transition: 0.8s all ease;
}
`;
export const Navbarcontainer = styled.div
`
display:flex;
justify-content: space-around;
height: 80px;
z-index: 1;
width: 100%
padding: 0 24px;
max-width: 1100px;
`;
export const Navlogo = styled(LinkR)
`
color: #fff;
justify:self: flex-start;
cursor: pointer;
font-size: 1.6rem;
font-family: Times New Roman;
display: inline-block;
align-items:Center;
margin-left: 100px;
font-weight: bold;
text-decoration: none;
position:absolute;
left:10px;
top: 15px;
`;

export const MobileIcon = styled.div
`display: none;
@media screen and (max-width:768px)
    {
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100% , 60%);
        font-size: 1.8 rem;
        cursor:pointer;
        color: #fff;
    }
`;

export const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align: center;
color: #fff;
position:relative;
margin-right: -600px;
@media screen and (max-width : 768px)
{
    display: none;
}
`;

export const NavItem =styled.li
` 
padding-right:20px;
padding-left:20px;
padding-top:60px;
height: 80px;
`;

export const NavLinks = styled(LinkScroll)
`
color: #fff;
display: flex;
align-items: Center;
text: decoration:none;
padding:0 1 rem;
height: 100%
cursor:pointer;

font-family: Times New Roman;

&.active
{
    border-bottom: 3px solid #01bf71;
}
`;



