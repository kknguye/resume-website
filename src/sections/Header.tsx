import Button from "../components/Button";
import Logo from "../components/Logo";
import DownloadIcon from '../assets/icn-download.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-8">
        {["About Me", "Skills", "Projects", "Contact Me"].map((text, index) => (
          <Link
            key={index}
            to={""}
            className="font-semibold"
          >
            {text}
          </Link>
        ))}
      </div>
      <Button>
        Resume
        <img src={DownloadIcon} />
      </Button>
    </header>
  )
}

export default Header;
