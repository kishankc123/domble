import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login/login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Pages/regsiter/register';
import DetailForm1 from './Pages/detailform/form1';
import DetailForm2 from './Pages/detailform/form2';
import Thankyou from './Pages/detailform/thankyou';
import Dashboard from './Pages/dashboard/dashboard';
import Profile from './Pages/profile/profile';
import AboutUs from './Pages/aboutus/aboutus';

const App = () => {

    return ( 
        <Router>
        <Switch >
        <Route exact path = "/" component = { Login } /> 
        <Route path = "/register" component = { Register } /> 
        <Route path = "/detailform1" component = { DetailForm1 }/> 
        <Route path = "/detailform2" component = { DetailForm2 }/> 
        <Route path = "/detailform3" component = { Thankyou }/>

        <Route path = "/dashboard" component = { Dashboard }/>
        <Route path="/profile" component={Profile}/>
        <Route path="/aboutus" component={AboutUs}/>



        </Switch> 
        </Router>




    );

}


ReactDOM.render( 
    <App/> ,
    document.getElementById("root")
)

reportWebVitals();