import React from 'react';
import { removeCart } from '../Redux/CartSlice';
import { useDispatch} from 'react-redux';

const CardCart = ({item}) => {
   
    const Dispatch = useDispatch();
    return (
        <div style={styles.card}>
            <img
              src={item.images?.[0]}
              alt={item.title}
              style={styles.image}
            />
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.description}>{item.description}</p>
            <p style={styles.price}>₹{item.price}</p>
            <button style={styles.button} onClick={()=> Dispatch(removeCart(item))}>Remove</button>
          </div>
    );
}

export default CardCart;

const styles = {
     card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#222",
    },
    description: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "12px",
      height: "40px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    price: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "12px",
      color: "#007bff",
    },
    button: {
      padding: "10px 16px",
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "auto",
    },
}
