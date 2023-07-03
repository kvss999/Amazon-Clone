import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{basket}]= useStateValue();
    
  return (
    <div className='checkout'>
        <div className='checkout_left'>
        <img className='checkout_ad' src={require('./images/check.png')}/>
        {basket?.length === 0 ? (
            <div>
                
                <h2>Your Shopping Basket Is Empty</h2>
                <p>You Shopping Basket is empty.To buy click "Add to basket" next to the item</p>
            </div>
        ) : (
            <div>
                <h2 className='checkout_title'>
                    Your Shopping Basket
                </h2>
                {/* checkout products */}
                { basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                    />
                    

                ))}
            </div>
        )}
        </div>
        {basket.length>0 && (
            <div className='checkout_right'>
                <h1>SubTotal</h1>
                <Subtotal/>
            </div>
            )}
        </div>
  );
}

export default Checkout