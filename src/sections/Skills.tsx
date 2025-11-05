import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";
import GitIcon from "../assets/icn-git.svg";
import JavaScriptIcon from "../assets/icn-javscript.svg";
import TypeScriptIcon from "../assets/icn-typescript.svg";
import ReactIcon from "../assets/icn-react.svg";
import JavaIcon from "../assets/icn-java.svg";
import EmberIcon from "../assets/icn-ember.svg";
import CIcon from "../assets/icn-c.svg";
import CSharpIcon from "../assets/icn-c-sharp.svg";
import CPlusPlusIcon from "../assets/icn-c-plus-plus.svg";
import PythonIcon from "../assets/icn-python.svg";

const skillsData = [
  { title: 'TypeScript', icon: TypeScriptIcon },
  { title: 'JavaScript', icon: JavaScriptIcon },
  { title: 'C#', icon: CSharpIcon },
  { title: 'C++', icon: CPlusPlusIcon },
  { title: 'Ember.js', icon: EmberIcon },
  { title: 'Python', icon: PythonIcon },
  { title: 'Java', icon: JavaIcon },
  { title: 'C', icon: CIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Git', icon: GitIcon },
]

const Skills = () => {
  return (
    <section className="w-[1440px] h-[728px] p-[60px_80px] flex justify-center items-center">
      <div className="w-[1280px] h-[608px] flex flex-col gap-5 items-center px-0 md:px-4 lg:px-8">
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
