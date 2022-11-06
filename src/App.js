import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component, useState } from 'react';
import  Addresses from "./components/Addresses";
import  Transfer from "./components/Transfer";
import  Reciept from "./components/Reciept";
import  Wallet from "./components/Wallet";
import History from "./components/History";
import Navbar from "./components/Navbar";
import {  transactions, wallets} from "./data"

import React from 'react'
import Wallets from "./components/Wallets";

export const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [wallets, setWallets] = useState([])
  const [transcations, setTransaction] = useState([])

  
  return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
            <Route path="/" element={<Transfer/>} />
            <Route path="/" element={<Addresses/>}/>
            <Route path="/wallets/:id" element={<Wallets/>} />
            <Route path="/" element={<Addresses/>}/>
          </Routes>
      </BrowserRouter>
  )
}


export default App;
