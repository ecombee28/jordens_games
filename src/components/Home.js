import { Link } from "react-router-dom";
import "../css/button.css";
import "../css/App.css";

function Home() {
  return (
    <div className="select-box">
      <div>
        <hi>Button</hi>
      </div>
      <Link to="/matchgame">
        <div>
          <button className="main-selection-button">Match Game</button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
