import SocialsCard from "../components/SocialsCard";
import LinkedInIcon from "../assets/icn-linkedin.svg";
import GitHubIcon from "../assets/icn-github.svg";

const socialsData = [
  { title: 'LinkedIn', icon: LinkedInIcon, href: "https://www.linkedin.com/in/kennyknguyenn/" },
  { title: 'GitHub', icon: GitHubIcon, href: "https://github.com/kknguye" }
]

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 mt-8">
    {
      socialsData.map(s => {
        return (
          <SocialsCard key={s.title} icon={s.icon} href={s.href} title={s.title} />
        )
      })
    }
  </div>
  )
}

export default Socials;
