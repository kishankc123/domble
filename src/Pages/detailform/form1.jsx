import React,{Component} from 'react';
import DetailFormInput from './detailforminput';
import FormHeader from './header_detailform';
class Form1 extends Component{


  clicknext=()=>{
    this.props.history.push("/detailform2");
  }
  clickback=()=>
  {
    this.props.history.push("/");
  }
  render(){
    const form={
      position:'relative',
      width:"80%",
      backgroundColor:"black",
      height:"60vh",
      margin:"auto",
      borderRadius:"18px",
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      top:"80px"

    }

    const container={
      width:"100wh",
      height:"100vh"
    }

    const btn={
      width:'20px',
      height:"20px",
      background:"rgba(255,255,255,0)",
      borderWidth:"0px",
      outline:0,
      margin:'0px 20px',
      padding:'5px'
    }   

    const btns={
    
      display:'flex',
      justifyContent:'flex-end',           
      alignItems:'center'
     
    }

    const text={
    
      width:"80%",
      fontSize:"24px",
      fontWeight:"bold",
      position:"absolute",
      left:"10%",
      marginTop:"20px"


    }
  return (
   
      <div style={container}>

      <FormHeader/>

      <div style={text}>
        Please enter your details
      </div>


      <form style={form}>

        <DetailFormInput value={"Name"}/>
        <DetailFormInput value={"DOB"}/>
        <DetailFormInput value={"Citizenship No"}/>
        <DetailFormInput value={"Father's Name"}/>
        <DetailFormInput value={"Email"}/>
        <DetailFormInput value={"Mobile Number"}/>
        <DetailFormInput value={"Gender"}/>

        <div style={btns}>

          <button style={btn} onClick={this.clicknext}>
          <svg width="20px" height="20px" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.734 12.7772L15.8097 8.57927L16.6894 7.62012L22.1334 13.4437L16.6936 19.3747L15.8055 18.4247L19.7472 14.1271L1.25102 14.1747L1.24805 12.8247L19.734 12.7772Z" fill="white"/>
</svg>


          </button>
        
         <button style={btn} onClick={this.clickback}>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11.0003H10.3333C12.9107 11.0003 15 8.91099 15 6.33366C15 3.75633 12.9107 1.66699 10.3333 1.66699H5.66667" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33333 7.66699L1 11.0003L4.33333 14.3337" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button> 
        </div>
      

     
          


      </form>
      </div>
  );
  

  }
  


}

export default Form1;