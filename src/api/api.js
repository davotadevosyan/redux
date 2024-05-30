import axios from "axios";



const instance = axios.create({
    baseURL : 'https://fakestoreapi.com'
})

export const prodAPI = {
    getAll () {
        return instance.get('/products')
        
    },
    getOne (id) {
        return instance.get(`/products/${id}`)
    },
    getCart(id) {
        return instance.get(`/product${id}`)
    }
}

