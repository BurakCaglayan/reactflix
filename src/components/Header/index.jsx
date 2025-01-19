import { Link } from "react-router";
import reactflixLogo from "@/assets/reactflix-logo.svg";

const Header = () => {
  return (
    <Link to="/">
      <img src={reactflixLogo} className="logo" alt="Reactflix logo" />
    </Link>
  );
};

export default Header;
