import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}