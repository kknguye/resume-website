import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";
import GitIcon from "../assets/icn-git.svg";
import TypeScriptIcon from "../assets/icn-typescript.svg";
import ReactIcon from "../assets/icn-react.svg";
import JavaIcon from "../assets/icn-java.svg";
import EmberIcon from "../assets/icn-ember.svg";
import CSharpIcon from "../assets/icn-c-sharp.svg";
import PythonIcon from "../assets/icn-python.svg";
import DotNetIcon from "../assets/icn-dot-net.svg";
import TailwindIcon from "../assets/icn-tailwind-css.svg";
import AWSIcon from "../assets/icn-aws.svg";

const skillsData = [
  { title: 'C#', icon: CSharpIcon },
  { title: 'Java', icon: JavaIcon },
  { title: 'Python', icon: PythonIcon },
  { title: 'TypeScript', icon: TypeScriptIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Ember.js', icon: EmberIcon },
  { title: 'Tailwind', icon: TailwindIcon },
  { title: '.NET', icon: DotNetIcon },
  { title: 'AWS', icon: AWSIcon },
  { title: 'Git', icon: GitIcon },
]

const Skills = () => {
  return (
    <section id="skills" className="w-[1440px] h-[660px] p-[60px_80px] flex justify-center items-center scroll-mt-24">
      <div className="w-[1280px] h-[520px] flex flex-col gap-5 items-center px-0 md:px-4 lg:px-8">
        <VariableWeightText regularText="My" extraBoldText="Skills" />
        <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-y-8 gap-x-16">
          {
            skillsData.map((skill) => {
              return (
                <SkillCard key={skill.title} icon={skill.icon} text={skill.title} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills;
