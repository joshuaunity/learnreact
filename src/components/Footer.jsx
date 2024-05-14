import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
    faLinkedin,
  faSquareWhatsapp,
  faSquareInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-eggcream py-6">
      <div className="flex justify-center">
        <a href="#" className="mx-3">
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
        </a>
        <a href="#" className="mx-3">
          <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
        </a>

        <a href="#" className="mx-3">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a href="#" className="mx-3">
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="#" className="mx-3">
          <FontAwesomeIcon icon={faSquareWhatsapp} size="xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
