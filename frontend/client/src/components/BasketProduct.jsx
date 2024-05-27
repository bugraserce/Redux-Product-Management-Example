import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const BasketProduct = () => {
    const { products, total, amount } = useSelector((store) => store.basket)

    return (
        <div>
         
         <div className='flex justify-center py-8 gap-4 text-2xl'>
                <p>Total</p>
                <p>{amount}</p>
                <p>${total}</p>
            </div>

            {products.map((item) => (
                <Product
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    amount={item.amount}
                />
            ))}
          

        </div>
    )
}

export default BasketProduct
