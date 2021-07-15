import React,{Component} from 'react';
import FormNavigation from '../../Components/formnavigation/formnavigation';
import RegisterInput from '../../Components/registter_input/registerinput';
import SocialMedia from '../../Components/socialmedia';


class Register extends Component{

    handleclickkyc=()=>{

        this.props.history.push("/detailform1");
    }


    render(){

        const maincontainer={
            width:'100%',
            height:'100vh',
            display:'flex',
            flexDisplay:'row'
        }


        const leftcontainer={
            width:"45%",
            height:'100%',
            position:'relative'

        }
        const rightcontainer={
            width:"55%",
            height:'100%',
            position:'relative',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'

        }

        const nav={
            position:'absolute',
            top:20,
            right:0
        }

        const card={
            width:"350px",
            height:'240px',
            position:'absolute',
            borderRadius:'10px',
            background:'rgba(255,255,255,0.2)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            top:'140px',
            left:"25%"
        }


        const btn1={
            width:222,
            height:60,
            borderRadius:60,
            border:'3px solid white',
            background:'rgba(255,255,255,0)',
            fontSize:'30px',
            color:'white'
        }

        const text1={
            color:'white',
            fontSize:'36px',
            fontWeight:500,
            textAlign:'center',
            margin:0
        }

        const text2={
            color:'white',
            fonstSize:"24px",
            margin:0,
            textAlign:'center'
        }

        const kyc_text={
            position:'absolute',
            fontSize:'24px',
            width:"55%",
            bottom:"250px"
        }

        const formcontainer={
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }

        const btn2={
            marginTop:'40px',
            width:222,
            color:'white',
            height:'60px',
            borderRadius:'60px',
            backgroundColor:'#8FC3FA',
            fontSize:'30px',
            fontWeight:500,
            borderWidth:0,
        
        }

        const text={
            fontSize:"64px",
            fontWeight:"bold",
            color:'#5C5C5C',
            marginTop:'60px'

        }

        const formcontent={
            display:'flex',
            flexDirection:'column',
            alignItems:'center'

        }

        const signup={
            marginTop:'30px',
            marginBottom:'10px',
            fontSize:"24px",
            fontWeight:500
        }

        const img_style={
            position:'absolute',
            bottom:0,
            right:-90,
           
        }

        return (
            <div style={maincontainer}>

                <div style={leftcontainer}>


                    <div style={formcontainer}>

                        <div style={text}>Sign Up</div>

                        <form style={formcontent}>

                            <RegisterInput value="UserName" icons="./icons/user.svg" handlechange={this.getname}/>

                            <RegisterInput value="Email" is_em={true} icons="./icons/email.svg" handlechange={this.getemail}/>
                            <RegisterInput value="Password" icons="./icons/lock.svg" is_pass={true} handlechange={this.getPassword}/>


                            <input type="submit" style={btn2} value="Login"></input>

                        </form>


                        <div style={signup}> Or Sign up with social platforms</div>

                        <SocialMedia/>

                    

                    </div>
                   
                    <div style={img_style}>
                    <img src="./images/bg_img.png" alt="" height="370px"></img>


                    </div>


                </div>

                <div style={rightcontainer}>

                <svg width="100%" height="100%" viewBox="0 0 767 1120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="45vw" cy="40vh" rx="60vw" ry="60vw"  fill="#2B6777"/>
                </svg>
                 

                 <div style={nav}>

                     <FormNavigation fontcolor={'white'}/>

                 </div>
                 

                 <div style={card}>
                     <p style={text1}>One Of Us?</p>
                     <p style={text2}>Log back into your account</p>

                     <button style={btn1}>Login</button>

                 </div>

                 <div style={kyc_text}>

                 You must fill your  KYC form in order to be eligible to perform the review and testing

                 

                 </div>

                 <div style={{position:"absolute",bottom:120}}>
                 <button style={btn1} onClick={this.handleclickkyc}>KYC FORM</button>
                 </div>

              
                 
                
                    


                </div>




            </div>
        );
    }
}

export default Register;