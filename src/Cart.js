import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
    super();
    this.state = {
       products:[
        {
      price:999,
      title:' Mobile Phone',
      qty:1,
      img:'',
      id:1
    },
    {
    price:99,
    title:' watch',
    qty:2,
    img:'',
    id:2
  },
  {
  price:5000,
  title:' Laptop',
  qty:1,
  img:'',
  id:3
}
]
}
    }
    render(){
      const {products} =this.state
        return (
            <div className='cart'> 
           {/* <CartItem title={"watch"} price={100} qty={1}/> */}
           {products.map ((item) =>{
           return  <CartItem title={item.title} price={item.price} qty={item.qty} key={item.id}/> 
           })}
            </div>
           
        );
    }
}

export default Cart;