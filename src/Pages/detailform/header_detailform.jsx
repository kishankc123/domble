import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Profile from '../profile/profile'
;class FormHeader extends Component{
  render(){


    const header_style={
        height:'150px',
        backgroundColor:'#2B6777',
        position:'relative',
        display:'flex',
        alignItems:'center'
    }

    const navbar={
        position:'absolute',
        display:'flex',
        right:'100px'
    }
    
    const domblestyle={

        fontSize:'68px',
        color:'#5C5C5C',
        marginLeft:'100px'

    }


    const navitem={
        width:'110px',
        color:'white',
        textDecoration:'none'
    }

    
  return (
      <div style={header_style}> 
          <div style={domblestyle}>
          Domble
          </div>
        

          
          <div style={navbar}>
              <div style={navitem}>Home</div>
              <Link style={navitem} to={"/aboutus"}>About Us</Link>
              <Link style={navitem} to={"/profile"}>DashBoard</Link>
          </div>
      </div>
  );
  

  }
  


}

export default FormHeader;