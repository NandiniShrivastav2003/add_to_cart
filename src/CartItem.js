import React from "react";
class CartItem extends React.Component {
  // constructor(){
  //   super();
   
    // this.CartIncrease = this.CartIncrease.bind(this)
    // this.CartDecrease = this.CartDecrease.bind(this)
  // }
  CartIncrease(){
    console.log('clicked');
    
   this.setState((prevState) => {
    console.log(this.state);
     return {qty : prevState.qty + 1}
    })
   
  }
  CartDecrease(){
    console.log('clicked');
    console.log(this.state.qty);
    if(this.state.qty == 0){
      return ;
    }
   this.setState((prevState) => {
     return {qty : prevState.qty - 1}
    })
  }
  render() {
    const {price,title,qty}=this.props;

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
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" alt="decrease"  onClick={this.CartDecrease.bind(this)} />
            <img src="https://cdn-icons-png.flaticon.com/512/484/484611.png" alt="delete" />
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
