import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../axios";

const Product = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    useEffect(() =>{
        axios.get(`/product/${params.id}`)
            .then(({data}) =>{
                setProduct(data)
            })
    }, [])
    return (
        <div className='product'>
         <div className='container'>
             <div className='product__crumbs'>
                 <Link className='product__crumbs-link' to='/' >Home</Link> - <p className='product__crumbs-product'>Product</p>
             </div>
             <div className='product__content'>
                 <div className='product__content-left'>
                     <img className='product__content-img' src={product.image} alt={product.title}/>
                 </div>
                 <div className='product__content-right'>
                     <h2 className='product__content-title'>{product.title}</h2>
                     <p className='product__content-desc'>{product.desc}</p>
                     <p className='product__content-price'>{product.price}</p>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Product;