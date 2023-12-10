// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon2 from "../Assets/SvgIcon2";
import SvgIcon3 from "../Assets/SvgIcon3";
import { useUser } from '../Profile/UserContex';
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  const { user } = useUser();
  const [menu, setMenu] = React.useState("shop");
  const [scrolled, setScrolled] = React.useState(false);
  

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cartItemCount = cartItems.length;

  

  return (
    <div className={`cosmicwear-container1 ${scrolled ? 'fixed' : ''}`}>
      <div className={`cosmic-wear-header`}>
        <p className={`cosmic-wear-title`}>CosmicWear</p>
        <div className={`cosmicwear-container`}>
          <div className={`shop-container`}>
            <ul className={`shop-container`} style={{ listStyleType: 'none' }}>
              <li onClick={() => { setMenu("shop") }}>
                <Link style={{ textDecoration: 'none', color: 'white' , fontFamily: 'cyberpunk', }} to='/'>Shop</Link>
                {menu === "shop" ? <hr /> : <></>}
              </li>
              <li onClick={() => { setMenu("mens") }}>
                <Link style={{ textDecoration: 'none', color: 'white' , fontFamily: 'cyberpunk', }} to='/mens'>Men</Link>
                {menu === "mens" ? <hr /> : <></>}
              </li>
            </ul>
          </div>
          <div className={`product-grid`}>
            {user ? (
              <>
                
                <Link to='/Profile' className="profile-btn">
                <SvgIcon3 className="svg-container2" />
              </Link>
              </>
            ) : (
              <Link to='/SignIn' className="icon-link">
                <SvgIcon3 className="svg-container2" />
              </Link>
            )}
            <div className="icon-gap"></div>
            <Link to='/Cart' className="icon-link">
              <SvgIcon2 className="svg-container1" />
              {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
