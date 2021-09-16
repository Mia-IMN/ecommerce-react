import './App.css';
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ecomm from './components/Ecomm';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hotdeals from './components/Hotdeals';
import Footer from './components/Footer';
import Productpage from './components/Productpage';
import Items from './components/Items';

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
          <route path="/Hot-deals">
            <Hotdeals />
          </route>
          <route path="/Nike Air Max 270 React">
            <Productpage />
          </route>
          <route path="/items">
            <Items />
          </route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
