interface SocialsBarProps {
  icon: any;
  href: string;
  title: string;
}

const SkillCard: React.FC<SocialsBarProps> = ({ icon, href, title }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title ?? "social link"}
      className="
        block w-[56px] h-[56px] border-2 rounded-md border-black aspect-square
        transform-gpu scale-100 hover:scale-[1.08]
        shadow-sm hover:shadow-lg
        transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        will-change-[transform]
      "
    >
      <div
        className="
          rounded aspect-square bg-white flex flex-col items-center justify-center
          invert-0 hover:invert transition-[filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <img className="w-[20px] h-[20px]" src={icon} />
      </div>
    </a>
  )
}

export default SkillCard;
