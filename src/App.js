import logo from './logo.svg';
import './App.css';
import {Browser, Routes, BrowserRouter, Route, Link} from "react-router-dom";
import { Component } from 'react';
import  Addresses from "./components/Addresses";
import  Transfer from "./components/Transfer";
import  Reciept from "./components/Reciept";
import  Wallet from "./components/Wallet";
import  History from "./components/History";


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <div>
          <ul>
          <li>
              <Link to="/Addresses">Addresses</Link> 
            </li>
            <li>
              <Link to="/History">History</Link> 
            </li>
            <li>
              <Link to="/Reciept">Reciept</Link> 
            </li>
            <li>
              <Link to="/Transfer">Transfer</Link> 
            </li>
            <li>
              <Link to="/Wallet">Wallet</Link> 
            </li>

          </ul>
        
          <Routes>
            <Route path="/Addresses" component={Addresses}  />
            <Route path="/History" component={History} />
            <Route path="/Reciept" component={Reciept} />
            <Route path="/Transfer" component={Transfer} />                  
            <Route path="/Wallet" component={Wallet} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
