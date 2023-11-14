import { Link } from "react-router-dom";
import styles from "../CSS/navbar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="nav_title">
        <Link to="/">Dashboard</Link>
      </div>

      <div className="nav_title">
        <Link to="/student">Student</Link>
      </div>
      <div className="nav_title">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
