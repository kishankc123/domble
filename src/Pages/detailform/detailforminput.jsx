import React,{Component} from 'react';

class DetailFormInput extends Component{

    render(){

        const input_container={
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            width:'70%',
            marginRight:"20px"
            
        }
        const label_style={color:'white',
        fontSize:'18px',
        fontWeight:500,
        marginLeft:'80px',
        textAlign:'left',
        width:"20%"
     }

     const input_style={
         width:'50%',
         background:'rgba(255,255,255,0.2)',
         borderRadius:'8px',
         border:'1px solid white',
         height:'36px',
         outline:'none',
         color:'white'

     }

        return (
           

<div style={input_container}>

<div style={label_style}>{this.props.value}</div>

<input style={input_style}></input>



</div>
            


        );

    }
}

export default DetailFormInput;