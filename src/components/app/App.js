import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/homePage'
import CartPage from '../pages/cartPage'


function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route path='/cart' element={<CartPage />}/>
    </Routes>
    </>
  );
}

export default App;
