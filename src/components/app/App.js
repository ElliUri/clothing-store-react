import './App.css';
import {Routes, Route} from 'react-router-dom'
import ShopHeader from '../shop-header/shop-header';
import HomePage from '../pages/homePage'
import CartPage from '../pages/cartPage'


function App() {
  return (
    <>
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210}/>
    <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route path='/cart' element={<CartPage />}/>
    </Routes>
    </main> 
    </>
  );
}

export default App;
