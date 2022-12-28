import React, { useState } from 'react';
import {FaShoppingBag ,FaUserAlt} from "react-icons/fa" ;
import Management from './management/Management';
import {Nav,NavItem,NavLink} from 'reactstrap';

const Header = (args) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (  
        <div>
          <Nav>
            <NavItem style={{marginRight : "20rem",marginLeft : "10rem" , fontSize : "15px" , fontFamily : "fantasy"}}>
              <h2
                active  
              >
            Toko
              </h2>
              </NavItem>   
              <NavItem>
              <NavLink >
            {/* <FaUserAlt style={{marginBottom : "-0.1rem" , fontSize : "30px" , color : "InfoText"}} /> */}
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink >
            {/* <FaUserAlt style={{marginBottom : "-0.1rem" , fontSize : "30px" , color : "InfoText"}} /> */}
              </NavLink>
              </NavItem>        
            <NavItem>
            {/* <span style={{marginTop : "20rem"}}>wishlist</span> */}
            <FaShoppingBag 
            type='Button' 
            style={{marginTop : "0.5rem" , fontSize : "30px" , color : "InfoText"}}
            
            />
            </NavItem>
            <NavItem>
              <NavLink >
            {/* <FaUserAlt style={{marginBottom : "-0.1rem" , fontSize : "30px" , color : "InfoText"}} /> */}
              </NavLink>
              </NavItem>
    </Nav>
    </div>
    );
}
 
export default Header;