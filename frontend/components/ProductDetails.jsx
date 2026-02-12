import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ()=>{

    const {id} = useParams();

    const [product,setProduct] = useState(null);
    const [error,setError] = useState("");

    useEffect(()=>{

        const fetchProduct = async()=>{
            try{

                let res = await fetch(`https://fakestoreapi.com/products/${id}`)
                let data = await res.json();
                setProduct(data);

            }
            catch(err){
                setError("Failed to fetch product details.!!");
            }
        }

        fetchProduct();

    },[id])


    if(!product) return null;
    if(error) return <h2>{error}</h2>

    return(
        <>
            <h1>Product Description</h1>

            <div className="product-details">
                <img src={product.image} alt="" />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Category:{product.category}</p>
                <p>Price₹:{product.price}</p>
                <button>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductDetails;