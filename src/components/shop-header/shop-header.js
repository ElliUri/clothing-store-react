import React from 'react'
import s from './shop-header.module.css'
import { Link } from 'react-router-dom'

const ShopHeader = ({ numItems, total}) => {
  return (
   <header className={s.shop_header}>
    <Link className={s.logo} to='/'>ReStore</Link>
    <Link  to='/cart'>
      <div className={s.shopping_cart}>
 <i className='cart_icon fa fa-shopping-cart' color='cadetblue' />
        {numItems} items (${total})
      </div>
       </Link>
   </header>
  )
}

export default ShopHeader