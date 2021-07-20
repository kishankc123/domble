import {BrowserRouter as Router} from 'react-router-dom'
import Body from './Components/LandingPage/Body/index';

import Login from './Components/Login/login';
import {  Route, Switch } from 'react-router-dom';
import Register from './Pages/regsiter/register';
import DetailForm1 from './Pages/detailform/form1';
import DetailForm2 from './Pages/detailform/form2';
import Thankyou from './Pages/detailform/thankyou';
import Dashboard from './Pages/dashboard/dashboard';
import Profile from './Pages/profile/profile';
import AboutUs from './Pages/aboutus/aboutus';

function App() {
  return (
    <Router >
   

      <Switch>
      <Route exact path = "/" component = { Body} />
      <Route path="/login" component={Login }/>
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

export default App;
