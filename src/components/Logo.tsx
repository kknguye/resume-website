import { Link } from 'react-router-dom';
import KLogo from '../assets/icn-k.png';

interface LogoProps {
  invert?: boolean;
}

const Logo: React.FC<LogoProps> = ({ invert = false }) => {
  return (
    <Link to={''}>
      <div className={`flex gap-3 items-center ${ invert && 'invert'}`}>
        <img src={ KLogo } className='w-10 h-10'/>
        <h2 className='text-lg font-bold'>Kenny Nguyen</h2>
      </div>
    </Link>
  )
}

export default Logo;
