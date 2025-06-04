import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.url} target="_blank" rel="noopener noreferrer">
              <div className="icon">
              <img className="w-5 h-5" src={socialImg.imgPath} alt="social icon" />
            </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Wellington Machado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;