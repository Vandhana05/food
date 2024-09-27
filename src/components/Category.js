import React, { useEffect, useState } from "react";
import { supabase } from "../client";

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from("categories").select("*");
                if (error) {
                    throw error;
                }
                setCategories(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    
    return(
        <div className="w-[65%] xl:w-[75%] mx-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                {categories.map((category) => (
                <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200">
                    <h2 className="font-bold sm:text-xl">{category.name}</h2>
                    <img className="w-16" src={category.image} alt=""/>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Category