import styled from 'styled-components';

export const Div = styled.body
`
position:absolute;
top:300%;
display:flex;
background:#B3A7B8;
background-color:#85B8E7;
height:100%;
width:100%;
`;

export const ClientSection =styled.div
`
position:absolute;
top:5%;
right:10%;
left:10%;
height: 55%;
width: 80%;
background: #fff;
background-color:#fff;
border-radius:50px;
border-style:double;
`;

export const Text= styled.text
`
position: absolute;
display:flex;
top:0%;
left:40%;
right:40%

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 120%;
line-height: 52px;
text-align: center;
color: red;
`;

export const SocialmediaContainer=styled.div
`
display: flex;
align-items:center;
list-style:none;
text-align: center;
color: #fff;
background-color:#fff;
position:absolute;
top:65%;
right:10%;
left:10%;

height: 25%;
justify-content: space-around;

z-index-1;
border-radius: 40px;

@media screen and (max-width : 768px)
{
    display: none;
}

border-style:solid;
border-color: cyan;

`;

export const Desc=styled.div
`
position:relative;
top:15%;
padding-left:5%;
padding-right:5%;

`;

export const SocialmediaName =styled.div
` 
color: #000;
`;

export const IconContainer =styled.div
`
position: relative;
align-item:center;
padding-left: 30px;
padding-right:30px;
padding bottom:100px;
color:#000;
background-color: #000;
border-radius:100px;
`;

