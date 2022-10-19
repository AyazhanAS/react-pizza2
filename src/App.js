

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// import pizzas from "./assets/db.json"

import "./scss/app.scss"


function App() {

 

  return (
    <div className="wrapper">
      <Header/>
     
      <div className="content">
        <div className="container">
          <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          {/*  */}
          
      
        </div>
      </div>
    </div>
  );
}

export default App;
