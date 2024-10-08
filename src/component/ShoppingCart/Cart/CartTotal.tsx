import { Button } from "react-bootstrap";
import { formatPrice } from "../../../utils/format";

type CartTotalProps = {
  total: number;
  clearCart: () => void;
};

export default function CartTotal({ total, clearCart }: CartTotalProps) {
  return (
    <footer className="d-flex align-items-center justify-content-between">
      <p>
        <span className="fw-medium">Total:</span> {formatPrice(total)}
      </p>
      <Button onClick={clearCart}>Clear Cart</Button>
    </footer>
  );
}
