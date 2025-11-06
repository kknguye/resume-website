import VariableWeightText from "../components/VariableWeightText";
import MyPhoto from "../assets/my-photo.jpg";
import MailIcon from "../assets/icn-mail.svg";
import PhoneIcon from "../assets/icn-phone.svg";
import LinkedInIcon from "../assets/icn-linkedin.svg";
import GitHubIcon from "../assets/icn-github.svg";

const contactInfo = [
  { icon: MailIcon, title: 'kennyknguyenn@gmail.com', href: "mailto:kennyknguyenn@gmail.com" },
  { icon: PhoneIcon, title: '+1 (864) 559-6789', href: "tel:+18645596789" },
  { icon: LinkedInIcon, title: 'linkedin.com/in/kennyknguyenn/', href: 'https://www.linkedin.com/in/kennyknguyenn' },
  { icon: GitHubIcon, title: 'github.com/kknguye', href: 'https://github.com/kknguye' },
]

const Contact = () => {
  return (
    <section id="contact" className="w-[1440px] h-auto p-[60px_80px] flex justify-center items-center scroll-mt-24">
      <div className="w-[1280px] h-[360px] flex flex-col gap-8 items-center px-0 md:px-4 lg:px-8">
        <VariableWeightText regularText="Contact" extraBoldText="Me" />
        {/* Container */}
        <div className="flex flex-row items-start gap-8">
          {/* Container */}
          <img className="h-[184px] w-[184px] border-gray-500 rounded-lg" src={MyPhoto} />

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-2xl font-semibold">Kenny Nguyen</p>
              <p className="text-gray-500">Computer Science @ Clemson University</p>
            </div>

            <div>
              {contactInfo.map(({ icon, title, href }, i) => (
                <div className="my-1 flex flex-row items-center gap-3" key={i}>
                  <img className="w-6 h-6 text-gray-500" src={icon} />
                  <a href={href} className="hover:underline">{title}</a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
