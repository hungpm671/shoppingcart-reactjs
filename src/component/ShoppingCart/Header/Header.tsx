import "./Header.css";
import { Basket } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

type HeaderProps = {
  cartCount: number;
};

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header>
      <div className=" d-flex align-items-center justify-content-between">
        <h1>SHOPPING CART</h1>
        <Button variant="primary">
          <Basket /> <Badge bg="danger">{cartCount}</Badge>
        </Button>
      </div>
    </header>
  );
}
