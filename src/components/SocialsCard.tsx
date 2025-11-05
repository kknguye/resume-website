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
      className="w-[56px] h-[56px] border-2 rounded-md border-black aspect-square"
    >
      <div className="rounded aspect-square hover:invert bg-white flex flex-col items-center justify-center">
        <img className="w-[20px] h-[20px]" src={icon} />
      </div>
    </a>
  )
}

export default SkillCard;
