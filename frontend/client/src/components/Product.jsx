import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseAmount, increaseAmount, removeItem } from '../features/basketSlice';

const Product = ({ name, price, image, amount, total }) => {
    const dispatch = useDispatch();

    return (
        <div className='flex flex-row items-center gap-8 p-6 border rounded-lg shadow-lg bg-white'>
            <img src={image} alt={`${name} glasses`} className='w-24 h-24 object-cover rounded-full' />
            <div className='w-1/2'>
                <p className='text-lg font-semibold text-gray-800'>Name: {name}</p>
                <p className='text-lg text-gray-600'>Price: ${price.toFixed(2)}</p>
                <p className='text-lg text-gray-600'>Amount: {amount}</p>

                <button onClick={() => { dispatch(removeItem({ name })) }} className='text-red-500 tracking-wide'>Remove</button>

                <div className='flex gap-10'>
                    <button onClick={() => { dispatch(increaseAmount({ name })) }}>+</button>
                    <button onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem({ name }))
                        }
                        dispatch(decreaseAmount({ name }))
                    }}>-</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
