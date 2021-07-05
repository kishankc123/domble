import React from 'react'
import "./Form.css";



const FormSignup = () => {
    
    return (

            <div className= 'form-container'>
            <p className= 'typography1'>Don Cueva  |  <a href="#" id ='link'>www.doncueva.com</a> </p>  
      
         <form >
            <div>
            <label>1. How do you rate the website design on a scale of 1 to 10?</label>
             <input
               className='form-field'
               name= '1'
               /> 
            </div> 
            <div>
            <label>2. Which part did you find corny?</label>
             <input
               className='form-field'
               name= '2'
               />
            </div>
            <div>
                   <label>3. Did you check upto the checkup point?</label>
             <input
               className='form-field'
               name= '3'
               />
            </div>
            <div>
                <label>4. Should we revisit our about section?</label>
             <input
               className='form-field'
               name= '4'
               />
            </div>
            <div> 
                <label>5. How easy was it for you to interact with our website?</label>
             <input
               className='form-field'
               name= '5'
               />
            </div>
            <div>
                <label>6. How responsive was our website?</label>
             <input
               className='form-field'
               name= '6'
               />
            </div>
            <div>
            <label>7. Any suggestions for a better page design?</label>
             <input
               className='form-field'
               name= '7'
               />
            </div>
            
            <div>
        
           
             <input type= 'submit'
               className='button'
               name= 'submit'
               value='submit'
               href= './FormSuccess.js'
               />
            </div>
        

         </form>
         </div>
        

    )
}

export default FormSignup
