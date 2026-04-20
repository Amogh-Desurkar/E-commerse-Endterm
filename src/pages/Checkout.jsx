import useCart from "../hooks/useCart";

export default function Checkout() {
  const { cart } = useCart();

  const subtotal = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}