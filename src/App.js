import './App.css';
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ecomm from './components/Ecomm';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return (
    <div className="Container">
      <Router>
        <Header />
        <Navbar/>

        <Switch>
          <route exact path="/">
            <Ecomm />
          </route>
          <route path="/login">
            <Login />
          </route>
          <route path="/signup">
            <Signup />
          </route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
