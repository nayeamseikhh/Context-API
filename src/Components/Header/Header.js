// import React, { useState } from 'react';

import { useContext } from "react";
import { CatagoryContext } from "../../App";

const Header = () => {
    const [count, setCount] = useContext(CatagoryContext);
    
    
    return (
        <div>
            <h1>This is Header: {count}</h1>
            <button onClick={()=> setCount("laptop")}>laptop + </button>
            <button onClick={()=> setCount("Mobile")}>Mobile + </button>
            <button onClick={()=> setCount('Camera')}>Camera + </button>
        </div>
    );
};

export default Header;