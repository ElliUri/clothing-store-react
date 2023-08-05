import React from 'react'
import s from './shop-header.module.css'

const ShopHeader = ({ numItems, total}) => {
  return (
   <header className={s.shop_header}>
    <a className={s.logo} href='#'>ReStore</a>
    <a className={s.shopping_cart}>
        <i className='cart_icon fa fa-shopping-cart' color='cadetblue' />
        {numItems} items (${total})
    </a>
   </header>
  )
}

export default ShopHeader