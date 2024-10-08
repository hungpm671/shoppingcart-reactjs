import "./App.css";
// import { posts } from "./component/blog/posts";
// import UserNews from "./component/blog/UserNews";
// import Button from "./component/Button";
// import ProductCard from "./component/ProductCard";
// import ProductList from "./component/ProductList";
import Dropdown from "./component/State/Dropdown";
import Modal from "./component/State/Modal";
import Offcanvas from "./component/State/Offcanvas";

// const products: Product[] = [
// {
// title: "Essence Mascara Lash Princess",
// image:
// "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
// rating: {
// count: 3,
// rate: 4.94,
// },
// variants: [
// {
// price: 9.99,
// compare_at_price: 12.99,
// },
// ],
// },
// {
// title: "Eyeshadow Palette with Mirror",
// image:
// "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
// rating: {
// count: 10,
// rate: 3.28,
// },
// variants: [
// {
// price: 19.99,
// compare_at_price: 29.99,
// },
// {
// price: 24.99,
// compare_at_price: 34.99,
// },
// ],
// },
// {
// title: "Powder Canister",
// image:
// "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
// variants: [
// {
// price: 16.99,
// },
// ],
// },
// ];

// const handleAddToCart = (product: Product) => {
// console.log(product);
// };

function App() {
return (
<>
{/\* <section className="featured-products">
<div className="container">
<ProductList>
{products.map((product) => (
<ProductCard
                key={product.title}
                product={product}
                onAddToCart={handleAddToCart}
              />
))}
</ProductList>
</div>
</section>

      <section className="featured-products">
        <div className="container">
          <ProductList>
            {posts.map((post) => (
              <UserNews key={post.id} post={post} />
            ))}
          </ProductList>
        </div>
      </section> */}
      {/* <Button /> */}
      <Modal />
      <Offcanvas />
      <Dropdown />
    </>

);
}

export default App;
