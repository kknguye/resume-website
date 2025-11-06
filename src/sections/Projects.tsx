import VariableWeightText from "../components/VariableWeightText";

const Projects = () => {
  return (
    <section id="projects" className="w-[1440px] h-[728px] p-[60px_80px] flex justify-center items-center scroll-mt-24">
      <div className="w-[1280px] h-[608px] flex flex-col gap-5 items-center px-0 md:px-4 lg:px-8">
        <VariableWeightText regularText="My" extraBoldText="Projects" />
      </div>
    </section>
  )
}

export default Projects;
