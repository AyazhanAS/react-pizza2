import React from 'react'


export default function Categories({categoryId, onActiveCategory}) {

  

  const categories = ["Все","Мясные","Вегетарианская", "Гриль", "Острые", "Закрытые"]

  

  return (
    <div className="categories">
              <ul>
                {categories.map((value, ind)=>(
                  <li 
                  key={value} 
                  onClick = {()=>onActiveCategory(ind)} 
                  className={categoryId===ind?"active":" "}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
  )
}
