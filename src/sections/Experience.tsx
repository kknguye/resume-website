import ExperienceCard from "../components/ExperienceCard";
import VariableWeightText from "../components/VariableWeightText";
import AlarmDotComIcon from "../assets/icn-alarm-dot-com.png";


const Experience = () => {
  return (
    <section
      id="experience"
      className="
        mx-0 w-full h-[728px] p-[60px_80px]
        !max-w-none !mx-0 !px-0 
        flex justify-center items-center bg-black scroll-mt-24"
    >
      <div className="w-[1280px] h-[608px] flex flex-col gap-8 items-center px-0 md:px-4 lg:px-8">
        <span className="mb-6 text-white"><VariableWeightText regularText="My" extraBoldText="Experience" /></span>
        
        <ExperienceCard
          icon={AlarmDotComIcon}
          title="Software Engineer Co-Op at Alarm.com"
          dateRange="Jan 2025 - May 2025"
          description="
            During my time at Alarm.com, I refactored virtual panel firmware to align with updated hardware, improving bulk user creation and testing workflows. 
            I enhanced an internal tool to auto-generate realistic demo communities with rental units and virtual residents, streamlining property-management testing and onboarding. 
            I also built a comprehensive audit trail system for rental community data with a searchable ASPX interface to review change history.
          "
          href="https://www.alarm.com"
        />

        <ExperienceCard
          icon={AlarmDotComIcon}
          title="Software Engineer Co-Op at Alarm.com"
          dateRange="May 2024 - Aug 2024"
          description="
            At Alarm.com, I worked as a full-stack Software Engineer Co-Op in an AGILE envirnment, maintaining applications built with Ember.js (TypeScript, Sass, Handlebars), .NET Core (C#), and MS SQL Server. 
            I developed and integrated a full-stack feature enabling remote door-lock control within live camera feeds, now used by over 20,000 commercial customers. 
            I also prepared labeled datasets and trained a convolutional neural network (CNN) for AI-driven floorplan recognition, automating device placement and reducing manual setup.
          "
          href="https://www.alarm.com"
        />
      </div>
    </section>
  )
}

export default Experience;
