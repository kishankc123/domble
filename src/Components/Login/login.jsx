 import React ,{Component} from 'react';
 import FormNavigation from '../formnavigation/formnavigation';
 import RegisterInput from '../registter_input/registerinput';
 import SocialMedia from '../socialmedia'; 

 
 class Login extends Component{

    state={
        username:'',
        password:''
    }

    handleclick=()=>{
        this.props.history.push("/register");
    }
  
    handleSubmitForm=(event)=>{

        event.preventDefault();

        console.log("username",this.state.username + "\n password" , this.state.password);

        
        
    }

    getUsername=(val)=>{

        this.setState({
            username:val

        });

    }

    getPassword=(val)=>{

        this.setState({
            password:val

        });

    }
    

  



render(){
 const container={
     width:"100vw",
     height:"100vh",
     
    
 }
 const main_container={
    
    width:'100%',

     height:"100%",
     display:'flex',
     flexDirection:'row'


 }
 const left_side={
   
     height:"100%",
     width:"55%",
     position:'relative'
 }

 const right_side={
    
    height:"100%",
    width:"45%",
    position:'relative',
    
  
}
const img_style={
    position:'absolute',
    top:'55vh',
    left:'35vw'

}
const text_container1={
    position:'absolute',
    top:"30vh",
    left:"30%"


}
const text1={
    color:"black",
    fontSize:"48px",
    margin:0,
    textAlign:'center',
    font:'Neucha'
}
const textcontainer2={

    position:'absolute',
    top:'50vh',
    left:'8vw'
  
}
const text2={
    fontSize:'24px',
    color:'black',
    textAlign:'center'
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
const form_container={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContents:'center'
}
const form_content={
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}

const btn2={
    marginTop:'50px',
    width:222,
    color:'white',
    height:'60px',
    borderRadius:'60px',
    backgroundColor:'#8FC3FA',
    fontSize:'30px',
    fontWeight:500,
    borderWidth:0,

}

const text3={
    fontSize:'64px',
    color:'#5C5C5C',
    fontWeight:'bold',
    marginTop:'100px'


}
 return (



<div style={container}>


<div style={main_container}>
      <div style={left_side}>

      <svg width="100vw" height="100vh" viewBox="0 0 1093 1120" fill="none" xmlns="http://www.w3.org/2000/svg">
           <ellipse cx="-25vh" cy="80vh" rx="50vw" ry="80vw" transform="rotate(29.6876 118.401 420.242)" fill="#2B6777"/>
       </svg>

       <div style={text_container1}>
           <p style={text1}>Earning is easy</p>
           <p style={text1}>When you are smart</p>
       </div>

       <div style={textcontainer2}>
           <p style={text2}>Not a member ?</p>
           
           <button style={btn1} onClick={this.handleclick}>Sign up</button>
           
         
       </div>

       
           <img style={img_style} src="./images/business 1.png" alt=""></img>
       




      </div>

      <div style={right_side}>
<div style={{position:"absolute",top:'20px',right:"0"}}> 

<FormNavigation/>
</div>
          
       <div style={form_container}>

           <div style={text3}>Sign In</div>

           <form style={form_content} onSubmit={this.handleSubmitForm}>
            
                 
                 <RegisterInput icons={"./icons/user.svg"} value={"Username"} handlechange={this.getUsername}/>
                 <RegisterInput icons={"./icons/lock.svg"} value={"Password"} handlechange={this.getPassword} is_pass={true}/>

               <input type="submit" value="login" style={btn2}></input>
           </form>


           <p style={text2}>Or Sign With social Platforms</p>
           
           <SocialMedia/>
           
       
              

       </div>

      </div>
</div>

    





</div>


    
 

 );


}


 }

 export default Login;