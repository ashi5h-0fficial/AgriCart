import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount]=useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/category'>categories</Link></li>
            <li> <Link to='/footer'>About</Link></li>
          </ul>
          <div className="center">
            Agricart
            {/* <span><img src={logo} alt="" /></span> */}
          </div>
          <div className="right">
            
            <TbSearch onClick={() => setShowSearch(true)} />
            <VscAccount onClick={()=>setShowAccount(true)}/>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>0</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
