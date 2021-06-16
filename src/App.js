import './App.css';
import FirstPage from './pages/FirstPage/FirstPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import RegisterAboutPage from './pages/RegisterAboutPage/RegisterAboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/Home/Home';

const App = (props) => {


  return (
    <Router>
      <div className='container-app'>
        <Switch>
          <Route path='/' exact>
            <FirstPage />
          </Route>
          <Route path='/register' exact>
            <RegisterPage />
          </Route>
          <Route path='/aboutregister' exact>
            <RegisterAboutPage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route path='/home' exacat>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
