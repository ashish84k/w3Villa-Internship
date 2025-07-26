import React from 'react';
import { useSelector } from 'react-redux';
import CardCart from './CardCart';
const Cart = () => {
    const carts = useSelector((store) => store.cart); 

    console.log(carts);
    
  const total = carts.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>🛒 Your Cart</h2>

        <div style={styles.grid}>
          {carts.map((item , index) => (
            <CardCart item={item} key={index}/>
          ))}
        </div>

        <div style={styles.totalSection}>
          <h3>Total Amount: ₹{total}</h3>
          <button style={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    padding: '60px 20px',
    color:'black'
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '30px',
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2c3e50',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  productName: {
    marginBottom: '10px',
    color: '#34495e',
  },
  totalSection: {
    marginTop: '40px',
    textAlign: 'center',
    color:'white'
  },
  checkoutBtn: {
    marginTop: '10px',
    padding: '12px 24px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Cart;
