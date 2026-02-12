import React, { useEffect, useState } from 'react'
import './Hero.css'
import './Header.css'
const Hero = () => {

  const [products,setProducts] = useState([]);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    const fetchProducts = async()=>{
      try{
          const res = await fetch('https://fakestorapi.com/products')
          const data = await res.json();
          setProducts(data);
      }
      catch(err){
        setError("Failed to fetch products data.!!");
      }
      finally{
        setLoading(false);
      }
    }
    
    fetchProducts();

  },[])



  if(error) return <h2>{error}</h2>

  if(loading) return <h2>Loading....!!</h2>

  return (
   <>
     <div className='hero-container'>
        <h1>Everything You Need, One SuperMart</h1>
        <p>Fresh groceries, daily essentials, and unbeatable deals—delivered straight to your doorstep.</p>
        <button>Explore Now</button>
    </div> 

    {
      products.map((p)=>(
        <div key={p.id}>
          <h2>{p.title}</h2>
        </div>
      ))
    }

   </>
  )
}

export default Hero