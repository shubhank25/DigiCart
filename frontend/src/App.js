import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as ReactBootstrap from 'react-bootstrap';
import Footer from './components/footer';

// material ui
//import{Button, button} from '@material-ui/core'

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Register from "./components/register";
import Signin from "./components/signin";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


function App() {
  
  const [sideToggle, setSideToggle] = useState(false);

  return (

    <div className="page-container">
    <div className="content-wrap">

    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />

          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={Signin} />


        </Switch>
        <Footer />
      </main>
      
    </Router>
    
</div>
    </div>

  );
  };

  export default App;
