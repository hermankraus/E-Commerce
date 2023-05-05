import React from "react"
import "./Header.css"
const Header = ({children}) => {
  return (
    <div className="header-container">
        
        
        <h1>STRENGTH STORE</h1>

        <div className="login-shop-container"> {children} </div>
      
    </div>
  )
}

export default Header
