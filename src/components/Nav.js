import "../css/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="selection-box">
        <Link to="/">
          <li>Home</li>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
