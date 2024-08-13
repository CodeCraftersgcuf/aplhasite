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
      <div className="footer flex-wrap xl:flex-nowrap flex justify-center mt-8  w-full border border-[#3b3b3b]">
        <div className="footer1  flex-col flex flex-wrap justify-between xl:w-[1568px] w-full">
          <div className="links flex  flex-wrap justify-start p-6 gap-7">
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
          <div className="flex justify-center lg:flex-nowrap flex-wrap lg:justify-start items-center border-t border-[#3b3b3b] max-w-full lg:border-b-none sm:border-b-gray-500">
            <div className="privacyLinks  p-6 lg:max-w-[600px] max-w-full border-e border-[#3b3b3b] ">
              <aside className="copyRight">
                <span class="footer-last">
                  <ul className="flex flex-wrap lg:flex-nowrap">
                    <li>PRIVACY POLICY</li>
                    <li>TERMS OF SERVICE</li>
                    <li>SITEMAP</li>
                    <li style={{ marginLeft: 0 }}>
                      DO NOT SELL OR SHARE MY PERSONAL INFORMATION
                    </li>{" "}
                  </ul>

                  {/* <p>PRIVACY POLICY</p> <p>TERMS OF SERVICE</p> <p>SITEMAP</p>{" "}
            <p>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</p> */}
                </span>
                <h6 className="text-[10px]">
                  © 2024 &#x2022; Alphalete Athletics LLC | All Rights Reserved
                </h6>
              </aside>
            </div>
            <div className="style-text flex flex-col justify-center  text-center lg:text-start lg:max-w-[968px]  max-w-full p-5 ">
              <p className="text-[13px] text-white font-semibold ">
                Premium Workout Clothes & Athleisure
              </p>
              <span className="text-[10px] pt-2">
                Experience the next level of comfort, style, and functionality
                with our premium athleisure collections designed for those who
                demand the best. Shop now!
              </span>
            </div>
          </div>
        </div>
        <div className="footer2   border-s border-[#3b3b3b] lg:max-w-[350px] md:max-w-[250px]  sm:w-full">
          <div className="form">
            <div>
              <h4 className="form-heading  text-white  extrasmall:text-[14px] text-[18px] text-center pt-5">
                STAY CONNECTED
              </h4>
              <div className="sub-input p-6">
                <div className="">
                  <label className="flex text-white flex-col text-sm text-[9px] gap-3">
                    Email
                    <input
                      className=" rounded-none flex-1 bg-transparent text-[10px] !outline-none border-b border-secondary/20 transition-all hover:border-secondary focus:border-secondary border-error error mt-[5px] pb-[10px]"
                      type="text"
                      placeholder="Your Email Address"
                    />
                  </label>
                  <br />
                  <label className="flex text-white flex-col text-sm text-[9px] gap-3">
                    Phone
                    <input
                      className="rounded-none flex-1 bg-transparent text-[10px] !outline-none border-b border-secondary/20 transition-all hover:border-secondary focus:border-secondary border-error error mt-[5px] pb-[10px]"
                      type="phone"
                      placeholder="+123 456 789"
                    />
                  </label>
                </div>
                <div className="w-full">
                  <button
                    style={{ borderRadius: "50px" }}
                    className="button w-full "
                  >
                    Subscribe
                  </button>
                </div>
                <p class="opacity-60 leading-tight text-[8px]  text-start">
                  By signing up via text you agree to receive recurring
                  automated marketing messages and shopping cart reminders at
                  the phone number provided. Consent is not a condition of
                  purchase. Reply STOP to unsubscribe. HELP for help. Msg
                  frequency varies. Msg &amp; Data rates may apply. View
                  <a
                    href="/policies/privacy-policy"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    <ins> Privacy Policy</ins>{" "}
                  </a>{" "}
                  &amp;&nbsp;
                  <a
                    href="/policies/terms-of-service"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    <ins>Terms of Service</ins>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="social-links border-t border-[#3b3b3b]">
            {" "}
            <div className="icons flex justify-center">
              <BsFacebook className="footerIcon" />
              <BsInstagram className="footerIcon" />
              <BsTiktok className="footerIcon" />
              <BsTwitter className="footerIcon" />
              <BsYoutube className="footerIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className="bgCover"></div>
    </>
  );
};

export default Footer;
