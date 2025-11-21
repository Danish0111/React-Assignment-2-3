import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ShoppingCart = () => {
    const products = [
        { id: 1, name: "Laptop", price: 9999 },
        { id: 2, name: "Phone", price: 4999 },
        { id: 3, name: "Tablet", price: 2999 },
        { id: 4, name: "Headphones", price: 1999 },
        { id: 5, name: "Smartwatch", price: 1499 },
        { id: 6, name: "Camera", price: 5999 },
    ]

    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [cart, setCart] = useState({});

    const handleAdd = (product) => {
        setCart((prev) => {
            const prevItem = prev[product.id];
            const nextQty = prevItem ? prevItem.qty + 1 : 1;

            return {
                ...prev,
                [product.id]: { product, qty: nextQty }
            }
        })
    }
    const handleRemove = (product) => {
        setCart((prev) => {
            const prevItem = prev[product.id];
            if (!prevItem) return prev;

            const nextQty = prevItem.qty - 1;
            const copy = { ...prev };
            if (nextQty <= 0) {
                delete copy[product.id];
            } else {
                copy[product.id] = { ...prevItem, qty: nextQty };
            }
            return copy;
        })
    }

    useEffect(() => {
        const items = Object.values(cart);
        const totalCount = items.reduce((s, item) => s + item.qty, 0);
        const totalPrice = items.reduce((s, item) => s + item.qty * item.product.price, 0);
        setCount(totalCount);
        setPrice(totalPrice);
    }, [cart])


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex mt-10">
                <ShoppingCartIcon className='size-5' />
                <span className="bg-blue-500 text-white rounded-full w-2 h-2 p-2 flex justify-center items-center text-xs">{count}</span>
            </div>
            <div className="flex justify-center items-center">
                Total Price:
                <span className='text-lg font-bold px-2'>₹{price}</span>
            </div>
            <div className='grid grid-cols-3 gap-20 justify-self-center py-10'>
                {products.map((product) => {
                    return (
                        <div className="w-60 h-20 border-2 border-gray-500 rounded-md flex flex-col justify-center select-none" key={product.id}>
                            <div key={product.id} className="flex justify-around items-center gap-4 text-lg font-semibold">
                                <div className="">{product.name}</div>
                                <div className="">₹{product.price}</div>
                            </div>
                            <div className="flex justify-around items-center my-2">
                                <div className="flex gap-1">
                                    <MinusIcon onClick={() => handleRemove(product)} className='size-5 bg-gray-300 rounded-full hover:cursor-pointer' />
                                    <PlusIcon onClick={() => handleAdd(product)} className='size-5 bg-gray-300 rounded-full hover:cursor-pointer' />
                                </div>
                                <button onClick={() => handleAdd(product)} className="bg-blue-500 text-white py-1 rounded-md hover:bg-blue-700 px-2 text-sm hover:cursor-pointer">Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShoppingCart
