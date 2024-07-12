import React from 'react';
import { Web3 } from 'web3';
import {useNavigate} from 'react-router-dom';

const Wallet = () => {
  const navigate = useNavigate();
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        navigate('/home',{state:{address:accounts[0]}})
      } else {
        console.log('Install Metamask');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={connectWallet}>Connect Wallet</button>
    </>
  );
};

export default Wallet;
