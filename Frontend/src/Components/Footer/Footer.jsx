import './Footer.css';
import footer_img from '../../Assets/logo_big.png';
import instagram from '../../Assets/instagram_icon.png';
import pinterest from '../../Assets/pintester_icon.png';
import whatsapp from '../../Assets/whatsapp_icon.png';


const Footer = () => {
  return (
    <div className='footer' >
        <div className="footer-logo">
            <img src={footer_img} alt="Footer Image" />
            <p>Fashion.Com</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="Social Media logo" />
            </div>

            <div className="footer-icons-container">
                <img src={pinterest} alt="Social Media logo" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp} alt="Social Media logo" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>

  

      
    </div>
  )
}

export default Footer
