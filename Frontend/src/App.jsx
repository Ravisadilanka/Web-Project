import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';


function App() {


  return (
    

   
    <Router>
    <Navbar/>
    
      <Routes>

      <Route path='/' element={<Shop/>} Shop/>
      <Route path='/mens' element={<ShopCategory category = "men"/>}/>
      <Route path='/womens' element={<ShopCategory category = "women"/>}/>
      <Route path='/kids' element={<ShopCategory category = "kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
    
    
    </Router>
     
        
   
  )
}

export default App
