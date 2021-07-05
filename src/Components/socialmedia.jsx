import React,{Component} from 'react';

class SocialMedia extends Component{
    

  render(){
    const btn3={
        background:"rgba(255,255,255,0)",
        borderWidth:0,
        width:'64px',
        height:'64px',
        borderRadius:'64px'
    }
    const icon_container={
    
        margin:0,
        width:'420px',
        display:'flex',
        justifyContent:'center'
    }

    return (
        <>
        <div style={icon_container}>
                    <button style={btn3}> <img src="./images/twitterlogo.png"></img></button>
                    <button style={btn3}> <img src="./images/facebooklogo.png"></img></button>
                    <button style={btn3}> <img src="./images/googlelogo.png"></img></button>


</div>
</>
    );
  }

}

export default SocialMedia;            