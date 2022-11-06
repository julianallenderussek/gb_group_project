import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component, useEffect, useState } from 'react';
import  Addresses from "./components/Addresses";
import  Transfer from "./components/Transfer";
import  Reciept from "./components/Reciept";
import  Wallet from "./components/Wallet";
import History from "./components/History";
import Navbar from "./components/Navbar";
import {  transactions, addressess} from "./data"

import React from 'react'
import Wallets from "./components/Wallets";

export const App = () => {
  const [currentWallet, setWallet] = useState(null);
  const [addresses, setWallets] = useState([...addressess]);
  const [transcations, setTransaction] = useState([]);
  
  return (
    <BrowserRouter>
      <Navbar addressess={addressess} />
        {
        currentWallet ? <>{currentWallet}</> : <>Please choose a wallet</>
        }
        <Routes>
            <Route path="/history" element={<Transfer />} />
            <Route path="/transfer" element={<Transfer/>} />
            <Route path="/addresses" element={<Addresses addressess={addressess} />}/>
            <Route path="/wallets" element={<Wallets/>} />
            <Route path="/" element={<Addresses/>}/>
        </Routes>
      </BrowserRouter>
  )
}


export default App;
