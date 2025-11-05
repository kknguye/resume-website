import SocialsCard from "../components/SocialsCard";
import LinkedInIcon from "../assets/icn-linkedin.svg";
import GitHubIcon from "../assets/icn-github.svg";

const socialsData = [
  { title: 'LinkedIn', icon: LinkedInIcon },
  { title: 'GitHub', icon: GitHubIcon }
]

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 mt-8">
    {
      socialsData.map((socials) => {
        return (
          <SocialsCard key={socials.title} icon={socials.icon} />
        )
      })
    }
  </div>
  )
}

export default Socials;
