import DIGIREC from '../../assets/images/DIGIREC.svg'
import Logo from '../../assets/images/logo.svg'

function LogoContainer() {
    return ( 
        <div className="flex justify-between items-center">
            <img src={Logo} alt='#digirec'/>
            <div className="mx-2.5"><img src={DIGIREC} alt='#digirec' /></div>
        </div>
     );
}

export default LogoContainer;