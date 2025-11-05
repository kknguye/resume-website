import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="flex items-center justify-between">
        <Logo invert />
        <p className="text-white font-semibold">Developed with React</p>
      </footer>
    </div>
  )
}

export default Footer;
