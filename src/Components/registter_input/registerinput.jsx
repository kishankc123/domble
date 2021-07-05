import React, {Component} from 'react';


class RegisterInput extends Component{

    change=(event)=>{

        event.preventDefault();
        const value=event.target.value;
        console.log(value);
        this.props.handlechange(value);
       
    }




    

    render(){

        const input_container={
            marginTop:'20px',
            display:'flex',
            width:'420px',
            height:'60px',
            borderRadius:'60px',
            backgroundColor:'#E7E1E1',
            alignItems:'center',
            paddingLeft:'10px',
            paddingRight:'10px'
        }
        
        const input_style={
            width:"90%",
            background:"rgba(255,255,255,0)",
            borderWidth:0,
            outline:'none',
            flexWrap:'wrap',
            fontSize:'24px'
        }


        return (
        <>
        
        <div style={input_container}>
              
              <img src={this.props.icons} alt="icon"></img>
            
                <input placeholder={this.props.value} style={input_style} onChange={this.change} type={(this.props.is_pass)?"Password" : (this.props.is_em) ? "email" : "text"}></input>
              </div>
              
              </>);
    }
}
RegisterInput.defaultProps={
  is_pass:false,
  is_em:false
};

export default RegisterInput;