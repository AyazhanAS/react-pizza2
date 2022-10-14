import React from 'react'
import { useState } from 'react'

export default function Categories() {

  const [activeCategory, setActiveCategory] = useState(0)

  const categories = ["Все","Мясные","Вегетарианская", "Гриль", "Острые", "Закрытые"]

  const onActiveCategory = (index)=>{
    setActiveCategory(index)
  }


  return (
    <div className="categories">
              <ul>
                {categories.map((value, ind)=>(
                  <li key={value} onClick = {()=>onActiveCategory(ind)} className={activeCategory===ind?"active":" "}>{value}</li>
                ))}
              </ul>
            </div>
  )
}
