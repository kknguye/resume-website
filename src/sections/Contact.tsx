import VariableWeightText from "../components/VariableWeightText";
import MyPhoto from "../assets/my-photo.jpg";

const contactInfo = [
  { icon: 'bx bx-envelope', title: 'kennyknguyenn@gmail.com', href: "mailto:kennyknguyenn@gmail.com" },
  { icon: 'bx bx-phone', title: '+1 (864) 559-6789', href: "tel:+18645596789" },
  { icon: 'bx bxl-linkedin', title: 'linkedin.com/in/kennyknguyenn/', href: 'https://www.linkedin.com/in/kennyknguyenn' },
  { icon: 'bx bxl-github', title: 'github.com/kknguye', href: 'https://github.com/kknguye' },
]

const Contact = () => {
  return (
    <section id="contact" className="w-[1440px] h-auto p-[60px_80px] flex justify-center items-center scroll-mt-24">
      <div className="w-[1280px] h-[432px] flex flex-col gap-8 items-center px-0 md:px-4 lg:px-8">
        <VariableWeightText regularText="Contact" extraBoldText="Me" />
        {/* Container */}
        <div className="flex flex-row items-start gap-8">
          {/* Photo */}
          <img className="h-[216px] w-[216px] border-1 border-zinc-500 rounded-lg shadow-md" src={MyPhoto} />

          <div className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <p className="text-2xl font-semibold">Kenny Nguyen</p>
              <p className="text-zinc-500">Computer Science @ Clemson University</p>
            </div>

            {/* Contact Info */}
            <div>
              {
                contactInfo.map(({ icon, title, href }, i) => (
                  <div className="my-1 flex flex-row items-center gap-3" key={i}>
                    <i className={`${icon} text-[24px] text-zinc-500`} />
                    <a href={href} className="hover:underline">{title}</a>
                  </div>
                ))
              }
            </div>

            {/* Divider */}
            <hr className="w-full border-t border-zinc-300" />

            {/* Location */}
            <div className="flex flex-col gap-1">
              <p className="font-bold text-zinc-500">Location</p>
              <p>Greenville, SC</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
