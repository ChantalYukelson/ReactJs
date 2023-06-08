import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { getProducts } from './stock';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
     <ItemListContainer greeting={'Bienvenidos a Estuardo'} products={products} />
    </div>
  );
}

export default App;
