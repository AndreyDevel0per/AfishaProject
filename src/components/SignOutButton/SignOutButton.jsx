import { Link } from "react-router-dom";
import "./SignOutButton.css";

export default function SignOutButton({ onClick }) {
  return (
    <Link to={'/'}>
      <button className="signOutButton" onClick={onClick}>
        <span>Sign out</span>
      </button>
    </Link>
  );
}
