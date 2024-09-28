import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CatagoryContext } from '../../App';

const allProducts = [
    {name:'Lenovo', category: 'laptop'},{name:'Asus', category: 'laptop'},{name:'HP', category: 'laptop'},
    {name:'Sumsung', category: 'mobile'}, {name:'Vivo', category: 'mobile'}, {name:'Apple', category: 'mobile'},
    {name:'Canon', category: 'camera'}, {name:'Nikon', category: 'camera'}, {name:'Sony', category: 'camera'}
]

const Categories = () => {
   const [count] = useContext(CatagoryContext);
   const [products, setProducts] = useState([]);
   useEffect(()=>{
        const matchedProducts = allProducts.filter( pd=> pd.category === count.toLowerCase());
        setProducts(matchedProducts);
   }, [count])
    return (
        <div>
            <h2>This is a Categories {count}</h2>
            {
                products.map(pd => <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;