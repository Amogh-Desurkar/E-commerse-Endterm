import useCart from "../hooks/useCart";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div>
      <h4>{item.title}</h4>
      <p>Qty: {item.qty}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}