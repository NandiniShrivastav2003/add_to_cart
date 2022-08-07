import React from "react";
class CartItem extends React.Component {
  constructor(){
    super();
    this.state={
      price:999,
      title:' Mobile Phone',
      qty:1,
      img:''
    }
    this.CartIncrease = this.CartIncrease.bind(this)
  }
  CartIncrease(){
    console.log('clicked');
    console.log(this.state.qty);
   this.setState((prevState) => {
     return {qty : prevState.qty + 1}
    })
  }
  render() {
    const {price,title,qty}=this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}/>
        </div>
        <div className="right-block">
          <div style={{fontSize:25}}>{title}</div>
          <div  style={{color:'#777'}}>{price}</div>
          <div style={{color:'#777'}}>{qty}</div>
          <div className="cart-item-actions">
            <img src="https://cdn-icons-png.flaticon.com/512/753/753317.png" alt="increase" 
            onClick={this.CartIncrease.bind(this)} />
            <img src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665714.png?token=exp=1659797626~hmac=1a820a2faaf6b81a5415f0c0e97cf766" alt="decrease"  />
            <img src="https://cdn-icons.flaticon.com/png/512/4225/premium/4225670.png?token=exp=1659797649~hmac=b4891eec90192a924a638fc18330219a" alt="delete" />
          </div>
        </div>
      </div>

    )
  }
}
const styles={
  image:{
    height:110,
    width:110,
    borderRadius:4,
    backgroundColor:'#ccc',
  }
}
export default CartItem;
