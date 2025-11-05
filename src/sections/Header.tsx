import Button from "../components/Button";
import Logo from "../components/Logo";
import DownloadIcon from '../assets/icn-download.svg';
import ResumeUrl from '../assets/resume_nguyen_2025.pdf';
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
        <a
          href={ResumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume PDF in new tab"
          className="inline-flex items-center gap-2"
        >
          Resume
          <img src={DownloadIcon} />
        </a>
      </Button>
    </header>
  )
}

export default Header;
