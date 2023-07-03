import React from 'react'
import './Header.css';
import {Link} from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search";
import { AiFillShopping } from "react-icons/ai";
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
function Header() {
  const [ {basket,user}] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
        <Link to="/">
        <img 
        className="header_logo" 
        src={require('./images/logo.png')}
        alt=""
        />
        {/*3 links*/}
        </Link>
        <div className="header_search">
        <input type="text" className= "header_searchInput" />
        <SearchIcon className="header_searchIcon" />
       
        </div>
        {/*1 links*/}
        <div className="headerNav">
          <Link to={!user && "/login"} className="header_link">
          <div  onClick={login} className="header_option">
          <span className="header_optionLineOne"> Hello {user?.email}</span>
          <span className="header_optionLineTwo">{user ? 'Sign out':'Sign In'}</span>
          </div>
          
          </Link>
        {/*2 link*/}
          <Link to="/" className="header_link">
          <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Prime</span>
          </div>
          
          </Link>
        {/*3 link*/}
          <Link to="/" className="header_link">
          <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
          </div>
          
          </Link>
          {/*4 link */}
          <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/*Shopping basket icon*/}
            <AiFillShopping />
            {/*<ShoppingBasketIcon />*/}
            {/*Number of items in basket*/}
            <span className="header_optionLineTwo header_basketCount">{ basket.length }</span>
          </div>
          </Link>

        </div>
        
    </nav>
  )
}


export default Header