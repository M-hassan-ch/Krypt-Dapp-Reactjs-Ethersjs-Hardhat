import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome';
import Services from './components/Services';
import Footer from './components/Footer';
import Transactions from './components/Transactions';
import { ContractState } from './context/contractState';
import './App.css';

function App() {
  return (
    <>
      <div className="gradient-bg-welcome">
        <ContractState>
          <Navbar />
          <Welcome />
          <Services />
          <Transactions />
          <Footer />
        </ContractState>
      </div>
    </>
  );
}

export default App;
