import React from "react";

export default function OrderCard({order, onIncrease, onDecrease}) {

  const format = (price) => "$ " + price;

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{format(order.price)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={() => onDecrease(order.product)}>-</div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={() => onIncrease(order.product)}>+</div>
      </div>
    </div>
  );
}
