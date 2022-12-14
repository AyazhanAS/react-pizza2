


// import PizzaBlock from './components/pizzaBlock';
// import Sceleton from './components/pizzaBlock/Sceleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import PizzaBlock from '../components/pizzaBlock';
import Sceleton from '../components/pizzaBlock/Sceleton';
import Pagination from '../components/pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage} from '../redux/slices/filterSlice';
import axios from 'axios';





export default function Home() {

  const {categoryId, sort, currentPage} = useSelector((state)=>state.filter)
  const sortType = useSelector(state=>state.filter.sort.sort)

    const [items, setItems] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()

    const onChangeCategory = (id)=>{
      dispatch(setCategoryId(id))
    }

  

    const onChangePage = number =>{
       dispatch(setCurrentPage(number))
    }
  

    const {searchValue} = useContext(SearchContext)

    
  
    useEffect(()=>{
      setIsLoading(true)


      const order = sortType.includes('-')?'asc':'desc';
      const sortBy = sortType.replace('-', '');
      const category = categoryId>0?`category=${categoryId}`:'';
      const search = searchValue?`&search=${searchValue}`:'';


      axios.get(`https://634a3d905df95285140de380.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
.then(response=>{
  setItems(response.data)
  setIsLoading(false)
    
}
  
)
      // fetch(`https://634a3d905df95285140de380.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`).then(res=>{
      //   return res.json()
      // }).then(json=>{
      //   setItems(json)
      //   setIsLoading(false)
      // })
  
    }, [categoryId, sortType, searchValue, currentPage])

    const sceleton = [...new Array(6)].map((_, index)=><Sceleton key={index}/>)

    const pizzas = items.map(
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
  return (
    <div>
       
          <div className="content__top">
            <Categories
            onActiveCategory = {onChangeCategory}
            
            categoryId={categoryId}  
            />
            <Sort />
          </div>
          <h2 className="content__title">?????? ??????????</h2>
          <div className="content__items">

            {
              isLoading?
              sceleton
              :pizzas
            }
       
         



          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
}
