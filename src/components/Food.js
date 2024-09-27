import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../client";


const Food = () => {
  const [foodList, setFoodList] = useState([]);
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    const getFoodItems = async () => {
      const res = await supabase.from("FoodMenu").select("*");
      console.log(res.data);
      setFoodList(res.data);
      setFoods(res.data)
    };
    getFoodItems();
  }, []);

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

  const filterType = (category) => {
    setSelectedCategory(category)
    if(category !== selectedCategory){
      const filteredFoods = foodList.filter((item) => {
        return item.category === category
      })
      setFoods(filteredFoods)
    } else {
      setFoods(foodList)
    }
  }

  return (
    <div className="w-[65%] xl:w-[75%] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col gap-4 justify-between">
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex flex-row w-full">
          {categories.map((category) => (
            <div
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1"
              onClick={() => filterType(category.name)} key={category.id}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((food, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              key={food.id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
            >
              <img
                className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg"
                src={food.image}
                alt=""
              />
              <div className="flex justify-between px-2 py-4">
                <p>{food.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-md">
                    {food.price}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};
export default Food;
