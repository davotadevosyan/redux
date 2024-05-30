import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProd } from "../../store/slices/prodSlice"
import './Products.css' 
import { NavLink } from 'react-router-dom'
import { fetchCart } from '../../store/slices/cartSlice'

export default function Products({num, setNum}) {
    const dispatch = useDispatch()
    const {products, isFalse} = useSelector((state) => state.prodData)
    useEffect(() => {
        dispatch(fetchProd())
    }, [])

const addToCart = () => {
    setNum(num + 1)
}

  return (
    <div className='products'>
        {
            isFalse ? <h1>loading...</h1> :
            products.map((el) => {
                return <div key={el.id} >
                    <NavLink to={`/${el.id}`}>{el.title}</NavLink>
                    <img src={el.image} width={150}/>
                     <button onClick={addToCart}>add to cart</button>
                </div>
            })
        }        
    </div>
  )
}
