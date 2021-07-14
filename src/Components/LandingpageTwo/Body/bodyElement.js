import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll' // For scroll in Nav Menu

export const Div = styled(LinkScroll)
`
display:flex;
position: absolute;
top:100%;
background: #85B8E7;
height:100%;
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
height:100%;
background-color: #85B8E7 ;
width:100%
align-text:Center;
text-color:#fff;
align-item:center;

`;

export const TextContainer =styled.text 
`
display:flex;
z-index:1;
position: absolute;
opacity: 100%;
width: 100%;
height: 100px;
left: 0px;
right:0px;
top: 50px;
align-item:center;

background: #FFF;
`

export const Text =styled.text
`
position: absolute;
width: 498px;
height: 64px;
left: 40%;
right:40%
top: 200px;
bottom: 25px;
opacity:100%;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 84px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #000;
`