interface SkillCardProps {
  icon: any;
  text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, text }) => {
  return (
    <div
      className="
        max-w-[186px] max-h-[186px] flex flex-col p-6 gap-8 justify-center items-center
        border-2 rounded-md bg-white border-black aspect-square
        invert-0 hover:invert
        transform-gpu scale-100 hover:scale-[1.08]
        shadow-sm hover:shadow-2xl
        transition-[filter,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        will-change-[filter,transform]
        motion-reduce:transform-none motion-reduce:transition-none
        "
      >
      <img className="w-[56px] h-[56px]" src={icon} />
      <p className="font-bold text-lg">{text}</p>
    </div>
  )
}

export default SkillCard;
