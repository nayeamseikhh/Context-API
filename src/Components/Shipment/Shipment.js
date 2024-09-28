import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {
    const [count, setCount] = useContext(CatagoryContext)
    return (
        <div>
            <h1>This is Shipment</h1>
            <h4>Shipment wants to Decrease</h4>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    );
};

export default Shipment;