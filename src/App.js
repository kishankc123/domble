import {BrowserRouter as Router} from 'react-router-dom'
import Body from './Components/LandingPage/Body/index';
import LandingpageTwo from './Components/LandingpageTwo/Body/index';
import LandingpageThree from './Components/LandingpageThree/Body/index';
import LandingpageFour from './Components/LandingpageFour/Body/index';
function App() {
  return (
    <Router >
      <Body/>
      <LandingpageTwo/>
      <LandingpageThree/>
      <LandingpageFour/>
    </Router>
  );
}

export default App;
