import './App.css';
import FirstPage from './pages/FirstPage/FirstPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SecondPage from './pages/SecondPage/SecondPage';
import ThreePage from './pages/ThreePage/ThreePage';
import FourPage from './pages/FourPage/FourPage';

const App = (props) => {


  return (
    <Router>
      <div className='container-app'>
        <Switch>
          <Route path='/' exact>
            <FirstPage />
          </Route>
          <Route path='/register' exact>
            <SecondPage />
          </Route>
          <Route path='/secondregister' exact>
            <ThreePage />
          </Route>
          <Route path='/threeregister' exact>
            <FourPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
