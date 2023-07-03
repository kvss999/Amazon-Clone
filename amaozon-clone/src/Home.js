import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div classname="home">
        <img
        className="home_image" 
        src={require('./images/Banner.jpg')}  alt=""/>
      
      {/* Product id,title.price,rating,image */}
      <div className='home_row'>
      <Product 
      id="134532"
      title="Apple iPhone 14 (128 GB) - Midnight"
      price={67499}
      rating={5}
      image="https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
      />
      <Product 
      id="201031"
      title="Nike
      Mens Dunk Hi Se Sneaker"
      price={58083}
      rating={4}
      image="https://m.media-amazon.com/images/I/71unB+tEfqL._AC_UL400_.jpg"
      />
      
      </div>
      <div className='home_row'>
      <Product 
      id="301021"
      title="Apple Watch Series 8 [GPS 41 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band." 
      price={36900}
      rating={5}
      image="https://m.media-amazon.com/images/I/71ulah9iIwL._AC_UY218_.jpg"
      />
      <Product 
      id="401021"
      title="Samsung 80 cm (32 Inches) HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)" 
      price={13490}
      rating={4}
      image="https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UY218_.jpg"
      />
       <Product 
      id="501021"
      title="Leader Spyder 27.5T MTB Cycle/Bike Single Speed" 
      
      price={6999}
      rating={5}
      image="https://m.media-amazon.com/images/I/81y9uUq1lnL._AC_UY218_.jpg"
      />
      </div>
      <div className='home_row'>
      <Product 
      id="601021"
      title="Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) VA Panel LCD Monitor with LED Back Light " 
      price={4999}
      rating={4}
      image="https://m.media-amazon.com/images/I/81xHjVQPwAL._AC_UY218_.jpg"
      />
      
      </div>
     
     
      {/* Product */}
    </div>
  )
}

export default Home