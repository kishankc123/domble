import React, {Component} from 'react';

class FormNavigation extends Component{

render(){

    const text_nav={

        fontSize:'18px',
        fontWeight:500,
        color:'black',
        textAlign:'left',
        width:'140px',
      
        height:'40px'
    
    }

return (
    <div style={{display:'flex',width:'420px',justifyContent:'space-evenly'}}>
    <div style={text_nav}>Login</div>
    <div style={text_nav}>About Us</div>
    <div style={text_nav}>Register</div>
</div>

);
}

}

export default FormNavigation;