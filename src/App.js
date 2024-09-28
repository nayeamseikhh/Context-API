import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment'; 
export const CatagoryContext = createContext();

function App() {
  const[count, setCount] = useState('laptop');
  return (
    <CatagoryContext.Provider  value={[count, setCount]}>
    <h3>App js Sections Count: {count}</h3>
    <Header></Header>
    <Home></Home>
    <Shipment></Shipment>
  

</CatagoryContext.Provider>

  );
}

export default App;
