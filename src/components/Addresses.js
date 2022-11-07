import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';

const Addresses = () => {
    
    const context = useContext(AppContext)
    const { addresses, currentWallet } = context;
    
    return (
        <>
        <h1>Blockchain Node Addresses</h1>
            <div>
                {
                    addresses.map((addresse) => {
                        return (
                            <div>
                                <Link to={`/transfer/${addresse}`}
                                from={currentWallet}
                                >{addresse}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
    
export default Addresses;
