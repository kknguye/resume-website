import Button from "../components/Button";
import Logo from "../components/Logo";
import DownloadIcon from '../assets/icn-download.svg';
import ResumeUrl from '../assets/resume_nguyen_2025.pdf';

const links = [
  { text: "About Me", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Contact Me", href: "#contact" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />

      <nav className="flex gap-8">
        {links.map(({ text, href }) => (
          <a key={href} href={href} className="font-semibold">
            {text}
          </a>
        ))}
      </nav>

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
