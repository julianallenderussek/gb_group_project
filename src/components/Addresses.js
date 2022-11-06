import React from 'react';

const Addresses = ({addressess}) => {
    console.log(addressess);
    return (
        <>
        <h1>Blockchain Node Addresses</h1>
            <div>
                {
                    addressess.map((addresse) => {
                    return <div>{addresse}</div>
                    })
                }
            </div>
        </>
    );
};
    
export default Addresses;
