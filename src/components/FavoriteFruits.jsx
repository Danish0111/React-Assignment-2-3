import { Filter } from "lucide-react";
import { useState } from "react";


const FavoriteFruits = () => {
    const fruits = ["Apple", "Banana", "Mango", "Avocado", "Orange"];
    const [filterActive, setFilterActive] = useState(false);

    const handleFilterToggle = () => {
        setFilterActive(!filterActive);
    }

    const filteredFruits = filterActive ? fruits.filter((fruit) => fruit.startsWith('A')) : [];
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="flex justify-center items-center gap-2">
                <h2 className="text-2xl font-bold">My Favorite Fruits</h2>
                <Filter onClick={handleFilterToggle} className="size-8 hover:cursor-pointer bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition" />
            </div>
            <ul>
                {filterActive ? (
                    <div className="">
                        {filteredFruits.map((fruit, index) => (
                            <li key={index} className="text-lg ">- {fruit}</li>
                        ))}
                    </div>
                ) : (
                    <div className="">
                        {fruits.map((fruit, index) => (
                            <li key={index} className="text-lg ">- {fruit}</li>
                        ))}
                    </div>
                )}
                {(filterActive && filteredFruits.length === 0) && (
                    <div className="mt-4">No fruits found</div>
                )}
            </ul>
        </div>
    )
}

export default FavoriteFruits
