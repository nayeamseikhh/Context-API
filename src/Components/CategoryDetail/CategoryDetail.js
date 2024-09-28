import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    
    return (
        <div>
            <h4>Category Details has: {name}</h4>
        </div>
    );
};

export default CategoryDetail;