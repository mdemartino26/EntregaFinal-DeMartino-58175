import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
         .then(response => {
            console.log(response)
            setProducts(response)
         })
         .catch(error => {
            console.error(error)
         })
    }, [categoryId])
    return(
        <div className='greeting'>
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer