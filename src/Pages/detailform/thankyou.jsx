
import React, {Component} from 'react';

class ThankYou extends Component{
    handleclickok=()=>{
        this.props.history.push("/");

    }

    render(){
        const conatiner={
            width:"100vw",
            height:"100vh",
            display:'flex',
            flexDirection:"column",
            alignItems:'center',
            position:'relative'

        }

        const thank={
            textAlign:"center",
            color:"#8FC3FA",
            fontSize:"70px",
            fontWeight:500,
            position:'absolute',
            top:'300px'
            
        }

        const text={
            fontSize:"24px",
            fontWeight:"bold",
            textAlign:'center'
            
        }



        const btn={
            width:"140px",
            height:"50px",
            color:'white',
            backgroundColor:"#2B6777",
            borderRadius:"20px",
            borderWidth:"0px",
            position:"absolute",
            right:"20px",
            bottom:"30px"
        }

        const img_btn={
           position:'absolute',
           bottom:"10px",
           left:"20px"

        }


        return (
            <div style={conatiner}>
                <svg width="100vw" height="350" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="720" cy="-100" rx="50vw" ry="300"  fill="#2B6777"/>
</svg>

<div style={thank}>Thanks!</div>
<div style={{position:'absolute',top:'400px'}}>
<div style={text}>Thank you for your patience and for completing our sign up form. </div>
<div style={text}>Your account will be verifed soon and your Domble ID will be sent to your email</div>
</div>


<div style={img_btn}> 
    <img src="./images/send.png" alt=""/>
    </div>

    <button style={btn} onClick={this.handleclickok}>OK</button>


            </div>

        );
    }
}

export default ThankYou;

