import Logo from "@/img/Logo.png";
import Home from "../home";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 text-center">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 flex flex-col items-center">
          <a href="#home"><img alt="logo" src={Logo} /></a>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-center">
          <h4 className="font-bold text-primary-500">Links</h4>
          <a href="https://www.instagram.com/evolates/" target="_blank">
            <p className="my-5">Instagram</p>
            </a>
          <a href="https://www.facebook.com/profile.php?id=100063506593557" target="_blank">
            <p className="my-5">Facebook</p>
            </a>          

          <a href="https://www.youtube.com/@evolates" target="_blank">
            <p>Youtube</p>
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-center">
          <h4 className="font-bold text-primary-500">Contact Us</h4>

          <a href="https://www.google.com/maps/place/Evolution+Knightsbridge/@51.4666504,-10.0229079,6z/data=!4m11!1m3!2m2!1sevo+pilates+uk!6e1!3m6!1s0x48760541847d627d:0xc9bafa8372b31a93!8m2!3d51.4962022!4d-0.1694842!15sCg5ldm8gcGlsYXRlcyB1a5IBEHBlcnNvbmFsX3RyYWluZXLgAQA!16s%2Fg%2F1tfkvsq5?entry=ttu" target="_blank">
            <p className="my-5">230 Brompton, London SW3, UK</p>
            </a>

          <a href="mailto:evopilinfo@gmail.com" target="_blank">
            <p className="my-5">evopilinfo@gmail.com</p>
            </a>

         <a href="tel:+13334256825" target="_blank">
          <p>(333)425-6825</p>
          </a>

        </div>
      </div>
      <p className="mt-12 text-center">© Copyright Evolutionary Pilates 2024. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
