import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Open 24/7. No contract. From only $10.99 a month. Join Evogym Group today for the affordable and best-in-class solution to smashing your fitness goals.
          </p>
          <p>© 2023 Evogym Group.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Legal</h4>
          <p className="cursor-pointer my-5">Membership agreement</p>
          <p className="cursor-pointer my-5">Legal stuff</p>
          <p className="cursor-pointer">Accessibility</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">4275 Isleta Blvd SW, Albuquerque, NM 87105</p>
          <p className="cursor-pointer my-5">contact@evogym.us</p>
          <p>505-842-5662</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
