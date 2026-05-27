import "../index.css";
const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="max-w-350 mx-auto px-4 py-16">
        <h1 className="font-bold text-6xl">Your Cart: </h1>
          </div>
          
          <div><h1>{cart.title}</h1></div>
    </>
  );
};

export default Cart;
