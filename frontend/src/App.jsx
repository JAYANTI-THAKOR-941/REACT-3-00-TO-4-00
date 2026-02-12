import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Products from '../components/Products'
import ProductDetails from '../components/ProductDetails'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>} ></Route>        
        <Route path='/product-details/:id' element={<ProductDetails/>} ></Route>        
      </Routes>
    </div>
    
  )
}

export default App
