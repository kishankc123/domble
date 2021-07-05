import React, {Component} from 'react';
import DetailFormInput from './detailforminput';
import FormHeader from './header_detailform';

class Form2 extends Component{
    clicksubmit=()=>{
        this.props.history.push("/detailform3");
      }
      clickback=()=>
      {
        this.props.history.push("/detailform1");
      }


    render(){
        const container={
            width:"100vw",
            height:"100vh",
            position:'relative'
        }

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

          const labelstyle={
              color:'white',
              size:'24px',
              margin:"0px 80px",
              width:"80%"
             
          }

          const address={
              display:'flex'
          }

          const btns={
              position:'absolute',
              right:'20px',
              bottom:"20px",
              display:'flex',
              flexDirection:'column',



          }

          const btn1={
              backgroundColor:"white",
              padding:"8px",
              borderRadius:"10px",
              borderWidth:"0px",
              width:"100px",
            

          }
          const btn2={
            background:"rgba(255,255,255,0)",
            borderWidth:"0px",
            width:"100px",
            marginTop:"20px"
          

        }




        return (

            <div style={container}>
                <FormHeader/>

                <form style={form}>

                    <div style={labelstyle}>Permanent Address</div>
                    <div style={address}>
                        <DetailFormInput value="Province"/>
                        <DetailFormInput value="City"/>
                        <DetailFormInput value="Ward"/>

                    </div>
                    
                    <div style={labelstyle}>Temprorary Address</div>
                    <div style={address}>
                        <DetailFormInput value="Province"/>
                        <DetailFormInput value="City"/>
                        <DetailFormInput value="Ward"/>

                    </div>
                    
                    <DetailFormInput value="Education"/>




                    <div style={labelstyle}>Please upload photo of your citizenship</div>

                    <DetailFormInput value="Front"/>
                    <DetailFormInput value="Back"/>
                    <div style={btns}>

                        <button style={btn1} onClick={this.clicksubmit}>Submit</button>

                        <button style={btn2} onClick={this.clickback}>  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 11.0003H10.3333C12.9107 11.0003 15 8.91099 15 6.33366C15 3.75633 12.9107 1.66699 10.3333 1.66699H5.66667" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33333 7.66699L1 11.0003L4.33333 14.3337" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                    </div>

                <div style={labelstyle}>
                <input type="checkbox"/> 
                I agree with the terms and conditions of Domble.

                </div>
               
                   

                </form>


            </div>

        );
    }
}

export default Form2;