interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className={`
        inline-flex items-center gap-2
        rounded font-semibold px-5 py-4
        text-white bg-black hover:bg-neutral-700
        transform-gpu hover:scale-[1.06]
        transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:shadow-lg will-change-[transform]
        motion-reduce:transform-none motion-reduce:transition-none
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  )
}

export default Button;
