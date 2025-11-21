import { Loader2, MinusIcon, PlusIcon } from "lucide-react"
import { useEffect, useState } from "react";

const ProductCatelog = () => {
    const sampleProducts = [
        // Electronics
        { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299, inStock: true, image: '/laptop.jpg' },
        { id: 2, name: 'Wireless Earbuds', category: 'Electronics', price: 199, inStock: true, image: '/earbuds.jpg' },
        { id: 3, name: 'Smartphone X', category: 'Electronics', price: 899, inStock: false, image: '/smartphone.jpg' },

        // Clothing
        { id: 4, name: 'Cotton T-Shirt', category: 'Clothing', price: 29, inStock: false, image: '/tshirt.jpg' },
        { id: 5, name: 'Denim Jeans', category: 'Clothing', price: 59, inStock: true, image: '/jeans.jpg' },
        { id: 6, name: 'Summer Hoodie', category: 'Clothing', price: 49, inStock: true, image: '/hoodie.jpg' },

        // Books
        { id: 7, name: 'React Handbook', category: 'Books', price: 39, inStock: true, image: '/book.jpg' },
        { id: 8, name: 'JavaScript Mastery', category: 'Books', price: 45, inStock: true, image: '/jsbook.jpg' },
        { id: 9, name: 'Time Management Secrets', category: 'Books', price: 25, inStock: false, image: '/timemanagement.jpg' },

        // Home
        { id: 10, name: 'LED Table Lamp', category: 'Home', price: 35, inStock: true, image: '/lamp.jpg' },
        { id: 11, name: 'Ceramic Coffee Mug', category: 'Home', price: 15, inStock: true, image: '/mug.jpg' },

        // Accessories
        { id: 12, name: 'Leather Wallet', category: 'Accessories', price: 39, inStock: true, image: '/wallet.jpg' },
        { id: 13, name: 'Sunglasses Classic', category: 'Accessories', price: 49, inStock: false, image: '/sunglasses.jpg' },

        // Sports
        { id: 14, name: 'Gym Water Bottle', category: 'Sports', price: 19, inStock: true, image: '/bottle.jpg' },
        { id: 15, name: 'Football Pro', category: 'Sports', price: 59, inStock: true, image: '/football.jpg' },
    ];

    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const filteredProducts = sampleProducts.filter((product) => {
        const matchesCategory = category === "All" ? true : product.category === category;

        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [search, category])


    return (
        <div className="flex flex-col justify-center items-center w-[60%] mx-auto mt-10">
            <div className="flex justify-between items-center gap-4 w-full">
                <input onChange={(e) => { setSearch(e.target.value); setLoading(true) }} type="text" name="search" id="search" className="focus:outline-0 border-2 border-gray-300 bg-gray-200 rounded p-2 w-full" placeholder="Search Product by name" />
                <select onChange={(e) => { setCategory(e.target.value); setLoading(true) }} name="category" id="category" className="border-2 border-gray-400 rounded  p-2">
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                </select>
            </div>

            {(filteredProducts.length === 0 && !loading) && (
                <div className="flex justify-center items-center text-lg font-semibold mt-20">
                    No Product Found
                </div>
            )}
            {loading && (
                <div className="flex justify-center items-center text-lg font-semibold mt-20">
                    <Loader2 className="size-8 animate-spin" />
                </div>
            )}
            {!loading && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-self-center py-10'>
                    {filteredProducts.map((product) => {
                        return (
                            <div className="w-60 h-20 border-2 border-gray-500 rounded-md flex flex-col justify-center select-none" key={product.id}>
                                <div key={product.id} className="flex justify-around items-center gap-4 text-lg font-semibold">
                                    <div className="">{product.name}</div>
                                    <div className="">₹{product.price}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default ProductCatelog
