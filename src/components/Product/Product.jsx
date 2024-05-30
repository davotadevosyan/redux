import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../store/slices/productSlice"
import { useParams } from 'react-router-dom'

export default function Product() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {product, isFalse} = useSelector((state) => state.productData)
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])

  return (
    <div className='product'>
        {   
                <div key={product.id} >
                    <div>{product.title}</div>
                    <img src={product.image} width={150}/>
                    <button>add to cart</button>
                </div>
            }
                
    </div>
  )
}

