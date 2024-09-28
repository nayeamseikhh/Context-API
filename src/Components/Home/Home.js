import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import { CatagoryContext } from '../../App';


const Home = () => {
   const [count] = useContext(CatagoryContext);
    return (
        <div>
            <h1>This is Home: {count} </h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;