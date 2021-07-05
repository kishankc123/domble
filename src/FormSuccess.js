import React from 'react'
import "./Form.css";

 const FormSuccess = () => {
     const thankyouContainer={
        position: `absolute`,
        width: `100px`,
        height: `516px`,
        bleft: `193px`,
        top: `200px`,
         }

    const thankyou={
            position: `absolute`,
            width: `643px`,
            height: `72px`,
            left:`400px`,
            top: `2px`,
            
            fontFamily:` Poppins`,
            fontStyle: `normal`,
            fontWeight:`500`,
            fontSize:`48px`,
            lineHeight:`72px`,
            /* identical to box height */
            
            
            color:`#8FC3FA`,
            
         }
    const midtext={
        
            position: `absolute`,
            width: `1053px`,
            height: `224px`,
            left: `110px`,
            top: `58px`,
            
            fontFamily: `Poppin`,
            fontStyle: `normal`,
            fontWeight: `normal`,
            fontSize: `30px`,
            lineHeight: `45px`,
            display: `flex`,
            alignItems: `center`,
            textAlign: `center`,
            
            color: `#000000`,
    }

    const button ={
        position: `absolute`,
        width: `401px`,
        height: `58px`,
        left: `225px`,
        top: `150px`,
        borderWidth:1,
        borderColor:'#8FC3FA`',
        borderRadius:50,
        
        fontFamily:`Poppins`,
        fontStyle: `normal`,
        fontWeight: `600`,
        fontSize: `24px`,
        lineHeight: `36px`,
        display: `flex`,
        alignItems: `center`,
        textAlign:'center',
        justifyContent: 'center',

        
        color: `#8FC3FA`,
        backgroundcolor: `white`,
        
    }
    


    return (
        <div style= {thankyouContainer}>
            <div style={thankyou}> Thank You for your opinion</div>
            <div style={midtext} >Your survey will be reviewed and your reward points will be provided to your domble account. You can review your reward points in ‘Total Rewards’ section of your dashboard</div>
            <div style = {button}>
            <input type= 'button'
            style={button}
          name= 'submit1'
          value='Take me to my dashboard'
          href='#'
        
          />
       </div>
        </div>
    )
}
export default FormSuccess