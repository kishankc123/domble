import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'  //For importing Link
import {Link as LinkScroll} from 'react-scroll' // For scroll in Nav Menu

export const Nav = styled.nav` 
position:-webkit-sticky;
position:sticky;

background: #85B8E7;
height:60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
top: 0;
z-index:1;
background-color: #background: #85B8E7;
@media screen and (max-width:9600px){
    transition: 0.8s all ease;
}
`;
export const Navbarcontainer = styled.div
`
position:fixed;
background: #85B8E7;

display:flex;
justify-content: space-around;
height: 80px;
z-index: 0;
width: 100%
padding: 0 24px;
max-width: 1100px;

`;

export const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align: center;
color: #85B8E7;
position:relative;
margin-right: -600px;
@media screen and (max-width : 768px)
{
    display: none;
}
`;

export const NavItem =styled.li
` 
padding-right:25px;
padding-left:25px;
padding-top:60px;
height: 80px;
`;

export const NavLinks = styled(LinkR)
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

//Neck section

export const Neck = styled.nav` 

position: sticky;
top:0px;

align-items:center;
background: #000;
height: 125px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
top: 0;
z-index:1;
background-color: #fff ;
@media screen and (max-width:9600px){
    transition: 0.8s all ease;
}
`;

export const NeckContainer = styled.div
`
display:flex;
justify-content: space-around;
height: 80px;
z-index: 1;
width: 100%
padding: 0 24px;
max-width: 1100px;
`;

export const NeckMenu=styled.ul`
display: flex;
align-items:Center;
list-style:none;
color: #fff;
margin-right: -600px;
@media screen and (max-width : 768px)
{
    display: none;
}
`;

export const NeckItem =styled.li
` 
align-items:Center;
padding-right:20px;
padding-left:20px;
padding-top:60px;
height: 100px;
`;

export const NeckLinks = styled(LinkR)
`
color: #000;
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

export const Necklogo = styled(LinkR)
`
align-items:center;
color: #000;
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

export const IconContainer =styled.div
`
position: relative;
align-item:center;
padding-left: 30px;
padding-right:30px;
padding bottom:100px;
`

// Body Section

export const Div = styled.div
`
display:flex;
position: absolute;
top:150px;
background: #2B6777;
height:180%;
width:100%

`;

export const Rone = styled.div
`
display:flex;
background:#000;
position:absolute;
top:0px;
left:50%;
right:0px;
height:60%;
background-color: #C8D8E4;
width:100%
align-text:Center;
text-color:#fff;
align-item:center;

`;

export const BoxContainer = styled.div

`
background:#E6F4F1;
display:flex;

position:relative;
top:20%;
left:25%;
z-index: 0;
height:40%;
width:50%;
align-text:Center;
align-item:center;
text-color:#000;
border-radius: 49px;

`;

export const Text =styled.text
`
align-item:center;
align-text:center;
position: relative;
top: 30%;
left: 30%;
right: 30%;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 48 px;
display:flex;

`
//checking for error
export const LoginButton = styled.button
`
position: absolute;
bottom:25%;
left:40%;
right:40%;
background:#2B6777;
border-type: solid;
color: #fff;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
border-radius: 15px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
z-index: 0;
display:flex;
`