interface SocialsBarProps {
  icon: any;
}

const SkillCard: React.FC<SocialsBarProps> = ({ icon }) => {
  return (
    <div className="w-[56px] h-[56px] border-2 rounded-md border-black aspect-square">
      <div className="rounded aspect-square hover:invert bg-white flex flex-col items-center justify-center">
        <img className="w-[20px] h-[20px]" src={icon} />
      </div>
    </div>
  )
}

export default SkillCard;
