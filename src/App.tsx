import { useState } from "react";
import "./App.css";
import CartItemList from "./component/ShoppingCart/Cart/CartList";
import Header from "./component/ShoppingCart/Header/Header";
import { CartItemObject } from "./component/ShoppingCart/Cart/CartItem";

const data = [
  {
    id: 168,
    title: "Charger SXT RWD",
    price: 32999.99,
    quantity: 3,
    total: 98999.97,
    discountPercentage: 13.39,
    discountedTotal: 85743.87,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
  },
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    quantity: 2,
    total: 3999.98,
    discountPercentage: 18.52,
    discountedTotal: 3259.18,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },
  {
    id: 183,
    title: "Green Oval Earring",
    price: 24.99,
    quantity: 5,
    total: 124.94999999999999,
    discountPercentage: 6.28,
    discountedTotal: 117.1,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  },
  {
    id: 100,
    title: "Apple Airpods",
    price: 129.99,
    quantity: 5,
    total: 649.95,
    discountPercentage: 12.84,
    discountedTotal: 566.5,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },
];
function App() {
  const [items, setItems] = useState<CartItemObject[]>(data);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const increaseQuantity = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };
  const decreaseQuantity = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };
  const clearCart = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container">
        <Header cartCount={cartCount} />
        <hr />
        <CartItemList
          items={items}
          removeItem={removeItem}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearCart={clearCart}
        />
      </div>
    </>
  );
}

export default App;
