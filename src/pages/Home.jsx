


// import PizzaBlock from './components/pizzaBlock';
// import Sceleton from './components/pizzaBlock/Sceleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import PizzaBlock from '../components/pizzaBlock';
import Sceleton from '../components/pizzaBlock/Sceleton';





export default function Home() {
    const [items, setItems] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [categoryId, setCategoryId] = useState(0)


    const [sortType, setSortType] = useState({name:"популярности", sort:"rating"})

    
  
    useEffect(()=>{
      setIsLoading(true)


      const order = sortType.sort.includes('-')?'asc':'desc';
      const sortBy = sortType.sort.replace('-', '');
      const category = categoryId>0?`category=${categoryId}`:'';

      fetch(`https://634a3d905df95285140de380.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,).then(res=>{
        return res.json()
      }).then(json=>{
        setItems(json)
        setIsLoading(false)
      })
  
    }, [categoryId, sortType])
  return (
    <div>
       
          <div className="content__top">
            <Categories
            onActiveCategory = {(ind)=>setCategoryId(ind)}
            
            categoryId={categoryId}  
            />
            <Sort sortType = {sortType} setSortType={setSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              isLoading?
              [...new Array(6)].map((_, index)=><Sceleton key={index}/>)
              :items.map(
                (obj)=> (
                  <PizzaBlock 
  
                  key={obj.id}
                  title = {obj.name} 
                  price = {obj.price} 
                  image = {obj.imageUrl}
                  sizes = {obj.sizes}
                  types = {obj.types}
                  />
              
        
            )
              )
            }
       
         



          </div>
    </div>
  )
}
