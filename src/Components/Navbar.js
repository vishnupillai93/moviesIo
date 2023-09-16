import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import '../ui/Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const renderItems=()=>{
    if(showMenu){
      return <FaTimes />
    }
    return<FaBars />
  }

  return (
    <div className='navbar'>
      <nav>
        <label className='logo'>moviesFo</label>
        <div className='menu-icon' onClick={handleMenuClick}>
          {renderItems()}
          
        </div>
        <ul className={showMenu ? 'nav-links nav-active' : 'nav-links'}>
          <li>
            <Link to='/' className='nav-link' onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/search' className='nav-link' onClick={handleMenuClick}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
