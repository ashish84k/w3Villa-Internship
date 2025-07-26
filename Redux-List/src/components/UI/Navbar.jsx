import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const carts = useSelector((store) => store.cart); 
    
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛍️ MyStore</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/product" style={styles.link}>
          Products
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart: {carts.length > 0 && <span style={styles.cartCount}>{carts.length}</span> || <span style={styles.cartCount}>0</span>}
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2c3e50",
    color: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    position: "sticky",
    zIndex: 1000,
    top: "0",
    left: "0",
    width: "100%",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  cartCount: {
    fontWeight: "bold",
    marginLeft: "5px",
    background: "orange",
    padding: "2px 8px",
    borderRadius: "12px",
    color: "#000",
  },
};

export default Navbar;
