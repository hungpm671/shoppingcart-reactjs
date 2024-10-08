import { useState } from "react";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowDownShort } from "react-bootstrap-icons";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <button onClick={dropdown} className="btn-show_modal p-2 m-2">
        Dropdown link <ArrowDownShort />
      </button>

      {isOpen && (
        <ul className="">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
