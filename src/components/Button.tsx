interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button className="rounded font-semibold px-5 py-4 flex gap-2 items-center text-white bg-black hover:bg-neutral-700">
      {children}
    </button>
  )
}

export default Button;
