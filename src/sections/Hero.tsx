import Socials from "../sections/Socials";
import ManIcon from "../assets/icn-man.svg";

const Hero = () => {
  return (
    <section className="w-[1440px] h-[716px] p-[60px_80px] flex justify-center items-center">
      {/* Container */}
      <div className="w-[1280px] h-[596px] px-8 py-0 flex items-center">
        {/* Banner Frame */}
        <div className="w-[600px] h-[376px] py-5 px-0 gap-12 flex flex-col">
          {/* Intro Frame */}
          <div className="flex flex-col gap-8 text-5xl">
            {/* Inner Frame 1 */}
            <div>
              <p>Hello I'm <span className="font-extrabold">Kenny Nguyen</span></p>
            </div>
            {/* Inner Frame 2 */}
            <div>
              <p><span className="font-extrabold">Clemson</span> Student</p>
            </div>
            {/* Inner Frame 3 */}
            <div>
              <p>Based in <span className="font-extrabold">Greenville, SC.</span></p>
            </div>
            {/* Bio Frame */}
            <div className="text-base">
              <span>Passionate biologist turned aspiring computer scientist. After completing my B.S. in Biological Sciences from the University of South Carolina, I decided to pursue computer science at Clemson University. I am eager to explore new horizons and take on exciting challenges. With a foundation in biology, I am bringing a unique perspective to software development.</span>
            </div>
          </div>
          <Socials />
        </div>
        <img className="absolute right-0" src={ManIcon} />
      </div>
    </section>
  )
}

export default Hero;