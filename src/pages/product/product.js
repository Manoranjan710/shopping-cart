import React from 'react'
import './product.css'
import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { Link, useParams } from "react-router-dom"
import { useCart } from '../../Context/Cart'


const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const {addToCart} = useCart();
    
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductById(productId);
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            {loading ? (
                <div className={"loader"}></div>
            ) : (
                <div className="product py-2">
                    <div className="details grid p-3">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3 className=' font-semibold'>{product.title}</h3>
                                <p className=" my-6 text-2xl">{product.description}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="text-5xl text-amber-900 font-bold mt-3">${product.price}</span>
                                <span className="cart" onClick= {() => addToCart(product) }>
                                    <img className=' hover:scale-105' src="https://img.icons8.com/fluency/48/fast-cart.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Product