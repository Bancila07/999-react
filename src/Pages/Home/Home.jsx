import React, {useEffect, useState} from 'react';
import axios from "../../axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [product , setProduct] =useState([])
    useEffect(() => {
        axios.get('/product')
            .then(({data}) => {
                setProduct(data)
            })
    }, [])
    return (
        <div className='home'>
            <div className="container">
                <div className='home__content'>
                    {
                        product.map((item) => (
                            <div className='home__card'>
                               <Link to={`/product/${item.id}`}>
                                   <img className='home__img' src={item.image} alt=""/>
                                   <h2 className='home__title'>{item.title}</h2>
                                   <span className='home__price'>{item.price}</span>
                                   <p className='home__description'>{item.desc}</p>
                               </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;