 import React ,{Component} from 'react';
 import FormNavigation from '../formnavigation/formnavigation';
 class Login extends Component{


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

const btn3={
    background:"rgba(255,255,255,0)",
    borderWidth:0,
    width:'64px',
    height:'64px',
    borderRadius:'64px'
}

const icon_container={

    margin:0,
    width:'420px',
    display:'flex',
    justifyContent:'center'
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
                <button style={btn1}>Sign up</button>
            </div>

            
                <img style={img_style} src="./images/business 1.png" alt=""></img>
            




           </div>

           <div style={right_side}>
<div style={{position:"absolute",top:'20px',right:"0"}}> 
    
    <FormNavigation/>

</div>
               

            


            <div style={form_container}>

                <div style={text3}>Sign In</div>

                <form style={form_content}>
                    <div style={input_container}>
                    <svg width="24" height="24" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 10.0205C11.875 13.8454 15.0718 16.958 19 16.958C22.9283 16.958 26.125 13.8454 26.125 10.0205C26.125 6.19563 22.9283 3.08301 19 3.08301C15.0718 3.08301 11.875 6.19563 11.875 10.0205ZM31.6667 32.3747H33.25V30.833C33.25 24.8837 28.2768 20.0413 22.1667 20.0413H15.8333C9.72167 20.0413 4.75 24.8837 4.75 30.833V32.3747H31.6667Z" fill="#857979"/>
</svg>

                        <input placeholder="UserName" style={input_style}></input>
                    </div>

                    <div style={input_container}>
                    <svg width="24" height="24" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 14.4375H23.5V9.79688C23.5 4.3957 19.2375 0 14 0C8.7625 0 4.5 4.3957 4.5 9.79688V14.4375H3C1.34375 14.4375 0 15.8232 0 17.5312V29.9062C0 31.6143 1.34375 33 3 33H25C26.6562 33 28 31.6143 28 29.9062V17.5312C28 15.8232 26.6562 14.4375 25 14.4375ZM18.5 14.4375H9.5V9.79688C9.5 7.23809 11.5188 5.15625 14 5.15625C16.4813 5.15625 18.5 7.23809 18.5 9.79688V14.4375Z" fill="#857979"/>
</svg>

       <input placeholder="Password" style={input_style}></input>

    

                    </div>

                    <input type="submit" value="login" style={btn2}></input>
                </form>


                <p style={text2}>Or Sign With social Platforms</p>

               

                   
<div style={icon_container}>
<button style={btn3}> <img src="./images/twitterlogo.png"></img></button>
                    <button style={btn3}> <img src="./images/facebooklogo.png"></img></button>
                    <button style={btn3}> <img src="./images/googlelogo.png"></img></button>


</div>
            </div>

           </div>
    </div>

         





 </div>
    

 );


}


 }

 export default Login;