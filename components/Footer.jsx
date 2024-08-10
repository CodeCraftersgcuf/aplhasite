import Link from "next/link";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-wrap justify-center gap-[150px] mt-8 pb-8">
        <div className="footer1  flex-col flex flex-wrap justify-between ">
          <div className="links flex  flex-wrap justify-center lg:justify-between lg:gap-0  p-4 xl:ps-0 ps-6 gap-14">
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 footer-div-h4 text-white font-semibold text-[13px]">
                Help
              </h4>
              <a href="#">Contact</a>
              <a href="#">Returns & Exchanges</a>
              <a href="#">Help Center</a>
              <a href="#">Brexit Info</a>
            </div>
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 footer-div-h4 text-white font-semibold text-[13px]">
                More
              </h4>
              <a href="#">Share The Look</a>
              <a href="#">About US</a>
              <a href="#">Careers</a>
              <a href="#">Alphaland</a>
              <a href="#">Summer Shredding</a>
            </div>
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 footer-div-h4 text-white font-semibold text-[13px]">
                Address
              </h4>
              <a href="#">
                13927 South Gessner Road, Missouri City Texas 77489, United
                States
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-7">
            <div className="privacyLinks">
              <aside className="copyRight">
                <h6 className="text-[12px]">
                  © 2024 &#x2022; Alphalete Athletics LLC | All Rights Reserved
                </h6>
                <h6 style={{ margin: "10px 0" }}>
                  LEARN MORE DREAM MORE BE MORE
                </h6>
                <span class="footer-last">
                  <ul>
                    <li>PRIVACY POLICY</li>
                    <li>TERMS OF SERVICE</li>
                    <li>SITEMAP</li>
                    <li>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</li>
                  </ul>
                  {/* <p>PRIVACY POLICY</p> <p>TERMS OF SERVICE</p> <p>SITEMAP</p>{" "}
            <p>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</p> */}
                </span>
              </aside>
            </div>
            <div className="style-text flex flex-col justify-center  text-center max-w-[300px] lg:text-start">
              <p className="pt-6 text-[13px] text-white font-semibold ">
                Premium Workout Clothes & Athleisure
              </p>
              <span className="text-[12px] text-gray-400 pt-2">
                Experience the next level of comfort, style, and functionality
                with our premium collection.
              </span>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className="form">
            <div>
              <h4 className="form-heading  extrasmall:text-[14px] text-[18px] ">
                STAY CONNECTED
              </h4>
              <div className="sub-input">
                <input
                  className="input-form"
                  type="text"
                  placeholder="Your Email Address"
                />
                <br />
                <input
                  className="input-form"
                  type="phone"
                  placeholder="+123 456 789"
                />
                <button style={{ borderRadius: "10px" }} className="button">
                  Subscribe
                </button>
                <p class="opacity-60 leading-tight text-[8px]">
                  By signing up via text you agree to receive recurring
                  automated marketing <br /> messages and shopping cart
                  reminders at the phone number provided. <br />
                  Consent is not a condition of purchase. Reply STOP to
                  unsubscribe. <br />
                  HELP for help. Msg frequency varies. Msg &amp; Data rates may
                  apply. <br />
                  View
                  <a
                    href="/policies/privacy-policy"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    Privacy Policy
                  </a>{" "}
                  &amp;
                  <a
                    href="/policies/terms-of-service"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="social-links">
            {" "}
            <div className="icons">
              <BsInstagram className="footerIcon" />
              <BsTiktok className="footerIcon" />
              <BsTwitter className="footerIcon" />
              <BsFacebook className="footerIcon" />
              <BsYoutube className="footerIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className="bgCover">
        <svg
          id=""
          class="icon-alphalete-logo w-[98%] h-full fill-secondary"
          style={{ fill: "#f5f5f5" }}
          data-name="Alphalete Logo"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          viewBox="0 0 274 25"
        >
          <path d="M12.52 0L0 24.93H7.82L10.03 20.15H23.07L25.31 24.93H33.32L20.83 0H12.52ZM12.72 14.37L16.54 6.13L20.38 14.37H12.72ZM44.32 0.019989H36.92V24.94H60.52V18.8H44.32V0.019989ZM86.29 1.5C87.1 1.9 87.8 2.42 88.39 3.05C88.98 3.68 89.45 4.45 89.79 5.34C90.11 6.21 90.28 7.25 90.28 8.42C90.28 9.98 90 11.35 89.45 12.48C88.89 13.62 88.1 14.56 87.1 15.29C86.12 16.01 84.93 16.54 83.57 16.87C82.24 17.2 80.76 17.36 79.17 17.36H71.37V24.93H64.1V0H77.74C78.78 0 79.82 0.04 80.82 0.13C81.83 0.21 82.81 0.36 83.72 0.58C84.64 0.8 85.51 1.11 86.29 1.5ZM81.49 10.93C81.83 10.68 82.09 10.37 82.28 9.98C82.47 9.59 82.57 9.09 82.57 8.51C82.57 7.94 82.47 7.47 82.29 7.12C82.11 6.77 81.86 6.5 81.54 6.3C81.2 6.09 80.77 5.93 80.27 5.84C79.74 5.74 79.14 5.69 78.51 5.69H71.37V11.68H78.52C79.14 11.68 79.71 11.62 80.23 11.49C80.72 11.37 81.14 11.18 81.49 10.93ZM114.56 9.32H101.27V0H93.86V24.93H101.27V15.31H114.56V24.93H121.95V0H114.56V9.32ZM125.54 24.93L138.06 0H146.37L158.87 24.93H150.85L148.61 20.15H135.57L133.36 24.93H125.54ZM142.08 6.13L138.26 14.37H145.92L142.08 6.13ZM169.86 0.019989H162.46V24.94H186.06V18.8H169.86V0.019989ZM210.79 14.78H197.06V19.02H214.22V24.93H189.65V0H214.22V5.89H197.06V9.68H210.79V14.78ZM217.81 6.12H227.94V24.93H235.33V6.12H245.44V0H217.81V6.12ZM256.44 14.78V19.02H273.6V24.93H249.04V0H273.56V5.89H256.44V9.68H270.18V14.78H256.44Z"></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;
