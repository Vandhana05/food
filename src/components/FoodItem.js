import React, { useEffect, useState } from 'react'
import { supabase } from '../client'

const FoodItem = async() => {

    const [food, setFood] = useState({})

    const getFood = async(id) => {
        const fooditem = await supabase.from("FoodMenu").select(`${id}`)
        if(fooditem){
            setFood(fooditem.data)
        } else {
            setFood({})
        }
    }

    useEffect(() => {
        getFood()
    })

  return (
    <div>
      
    </div>
  )
}

export default FoodItem
