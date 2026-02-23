import React, { useState } from 'react'
import './App.css';
import Practice from './components/Practice';

const App = () => {

  // const products = ["Tshirt","Jeans Pent","Shirt","Product1","Girls Tshirt"];

  const [products, setProducts] = useState([
    { id: 1, name: "Dell Laptop", price: 62000, available: true },
    { id: 2, name: "HP Laptop", price: 65000, available: false },
    { id: 3, name: "Headphone", price: 5000, available: true },
    { id: 4, name: "SmartPhone", price: 28000, available: true },
    { id: 5, name: "LED TV", price: 34000, available: false },
  ]);

  return (
    <div>
      {/* {
          products.map((product,index)=>(
            <ul key={index}>
              <h2>{product}</h2>
            </ul>
          ))
        } */}

        <table>
          <caption><h2>Product Management</h2></caption>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
          {
            products.map((product)=>(
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.available ? <span className='yes'>In Stock</span> : <span className='no'>Out Of Stock</span> }</td>
                <td><button>Delete</button></td>
              </tr>
            ))
          }
        </table>

        <br /><br />

        <Practice/>

    </div>
  )
}

export default App