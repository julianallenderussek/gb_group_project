import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Wallet = () => {
    const { currentWallet, balance } = useContext(AppContext)



    return (
        <div>
            <h1>My Wallet</h1>
            <div className='wallet'>
                <div className='wallet-row'>
                    <strong>Address:</strong>
                    { currentWallet }
                </div>
                <div className='wallet-row'>
                    <strong>Balance:</strong>
                    { balance } ETH
                </div>
            </div>
        </div>
    );
};
    
export default Wallet;