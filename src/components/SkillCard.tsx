interface SkillCardProps {
  icon: any;
  text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, text }) => {
  return (
    <div className="max-w-[186px] max-h-[186px] border-2 rounded-md border-black aspect-square">
      <div className="rounded aspect-square hover:invert bg-white flex flex-col p-6 gap-8 justify-center items-center">
        <img className="w-[56px] h-[56px]" src={icon} />
        <p className="font-bold text-lg">{text}</p>
      </div>
    </div>
  )
}

export default SkillCard;
