import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function calculateTotal() {
    let total = 0;
    total = orders.reduce((acc, order) => acc + (order.price * order.quantity), 0);
    return total;
  }

  function handleIncrease(product) {
    setOrders(orders.map((order) => {
      if (order.product === product) {
        return {...order, quantity: order.quantity + 1};
      }
      return order;
    }))
  }

  function handleDecrease(product) {  
    setOrders(orders.map((order) => {
      if (order.product === product) {
        return {...order, quantity: order.quantity - 1 > 0 ? order.quantity - 1 : 0};
      } 
      return order;
    }))
  }
  

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} 
                    order={order} onIncrease={handleIncrease} onDecrease={handleDecrease}></OrderCard>
        ))}
      </div>

      <CheckoutButton total={calculateTotal()}></CheckoutButton>
    </>
  );
}
