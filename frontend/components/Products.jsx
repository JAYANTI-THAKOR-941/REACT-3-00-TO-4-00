import { useEffect, useState } from "react";
import './products.css';
import { useNavigate } from "react-router-dom";

const Products = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json();
                setProducts(data);
            }
            catch (err) {
                setError("Error:Failed to fetch products data.!!");
            }
            finally {
                setLoading(false);
            }
        }


        fetchProducts();

    }, [])


    if (error) return <h2>{error}</h2>
    if (loading) return <h2>Loading products data.!</h2>
    return (
        <>
            <h1>Our Products</h1>
            <div className="product-container">

                {
                    products.map((p) => (
                        <div key={p.id} className="product-card">
                            <img src={p.image} alt="" />
                            <div className="product-info">
                                <h3>Id : {p.id}</h3>
                                <h3>{p.title}</h3>
                                <p>Category:{p.category}</p>
                                <p>Price:₹{p.price}</p>
                                <button onClick={()=>navigate(`/product-details/${p.id}`)}>View More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products;