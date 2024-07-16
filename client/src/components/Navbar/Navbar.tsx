import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="m-4 container-navbar Navbar ">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <h1 className="navbar-brand text-3xl font-bold header">Protio Shop</h1>

          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="links">
                Shop
              </Link>
              <Link to="/purchased-items" className="links">
                Purchases
              </Link>
            </div>
            <span className="navbar-text">
              <Link to="/checkout" className="links m-100px">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
