import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FormNavigation extends Component{

render(){

    const text_nav={

        fontSize:'18px',
        fontWeight:500,
        color:this.props.fontcolor,
        textAlign:'left',
        width:'140px',
      
        height:'40px',
        textDecoration:'none'
    
    }

return (
    <div style={{display:'flex',width:'420px',justifyContent:'space-evenly'}}>
    <Link to={"/"} style={text_nav}>Login</Link>
    <Link style={text_nav} to={"/aboutus"}>About Us</Link>


    <Link to={"/register"} style={text_nav}> Register</Link>
  
</div>

);
}

}

FormNavigation.defaultProps={
    fontcolor:'black'
}

export default FormNavigation;