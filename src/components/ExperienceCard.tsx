interface ExperienceCardProps {
  icon: any;
  title: string;
  dateRange: string;
  description: string;
  href?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    icon,
    title,
    dateRange,
    description,
    href,
}) => {
  return (
    /* Container */
    <div className="w-[1168px] h-[192px] flex flex-col gap-7 py-7 px-6 border-2 rounded-lg border-white">
        {/* Logo, Title, Date */}
        <div className="w-[1120px] flex flex-row text-white justify-center">
            <div className="flex flex-row items-center gap-7">
                <img className="h-[32px]" src={icon} />
                <p className="text-2xl font-semibold">{title}</p>
            </div>
            <p className="ml-auto self-center text-zinc-300">{dateRange}</p>
        </div>

        {/* Description */}
        <p className="text-zinc-300">{description}</p>
    </div>
  )
}

export default ExperienceCard;
