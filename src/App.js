

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// import pizzas from "./assets/db.json"

import "./scss/app.scss"


export const SearchContext = React.createContext(" ")
console.log(SearchContext);


function App() {




  const [searchValue, setSearchValue] = useState("")
  

 

  return (
    <div className="wrapper">


     <SearchContext.Provider value={{searchValue, setSearchValue}}>
     <Header/>
     
     <div className="content">
       <div className="container">
         <Routes>
       
           <Route path='/' element={<Home />}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='*' element={<NotFound/>}/>
         </Routes>
         {/*  */}
         
     
       </div>
     </div>
     </SearchContext.Provider>
    </div>
  );
}

export default App;
