import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll' // For scroll in Nav Menu

export const Div = styled(LinkScroll)
`
display:flex;
position:absolute;
top:200%;
background: #2B6777;
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
background-color: #C8D8E4;
width:100%
align-text:Center;
text-color:#fff;
align-item:center;

`;

export const TextContainer =styled.div
`
display:flex;
position: absolute;
width: 25%;
height: 200px;
left: 10%;
right:25%;
top: 30%;
align-item:center;

background: #FFF;
border-style:solid;
border-color: Cyan;
border-radius: 50px;
`

export const Text =styled.text
`
position: absolute;
width: 500px;
height: 64px;
left: 25%;
right:40%
top: 50%;
bottom: 75px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #000;
`

export const TestimonialContainer =styled.div 
`
display:flex;
position: absolute;
width: 80%;
height: 80%;
left: 10%;
right:25%;
top: 10%;
align-item:center;

background: #FFF;
border-style:solid;
border-color: Cyan;
border-radius: 50px;
`