
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import pizzas from "./assets/db.json"

import "./scss/app.scss"

function App() {

  return (
    <div className="wrapper">
      <Header/>
     
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories/> */}
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

          {pizzas.map((obj)=> (
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
      </div>
    </div>
  );
}

export default App;
