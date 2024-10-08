import "bootstrap/dist/css/bootstrap.min.css";
import "./CartItem.css";
import { formatPrice } from "../../../utils/format";
import { Trash } from "react-bootstrap-icons";

export type CartItemObject = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartItemProps = {
  item: CartItemObject;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export default function CartItem({
  item,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}: CartItemProps) {
  return (
    <div className="cart-item">
      <div className="cart-item_product d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <div className="product-img me-3">
            <img className="object-fit-cover" src={item.thumbnail} alt="" />
          </div>
          <div className="product-info">
            <div>
              <div className="product-title fw-medium">{item.title}</div>
              <small className="product-price">{formatPrice(item.price)}</small>
            </div>
            <button
              className="cart-item_remove mt-2 border-0 bg-transparent text-danger"
              onClick={() => removeItem(item.id)}
            >
              <Trash />
              Remove
            </button>
          </div>
        </div>

        <div className="cart-item_quantity d-flex align-items-center">
          <button
            className="border-0 px-2 bg-secondary-subtle"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <p className="m-0 mx-2">{item.quantity}</p>
          <button
            className="border-0 px-2 bg-secondary-subtle
            "
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
