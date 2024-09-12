import Link from "next/link";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import pang3aBlack from "@assets/Pang3aBlack.png"
import AuthInputButton from "./auth-input-subcomponents/AuthInputButton";
import CustomAuthInput from "./auth-input-subcomponents/CustomAuthInput";
import Image from "next/image";
import footerPhoto from '@assets/Footer.png'

const Footer = () => {
  return (
    <>
      <div className="flex-wrap xl:flex-nowrap flex justify-center mt-8  w-full border border-[#3b3b3b]">
        <div className="flex-col flex flex-wrap justify-between xl:w-[1568px] w-full">
          <div className="links flex flex-wrap justify-start p-6 gap-7">
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 text-black font-semibold text-[13px]">
                Help
              </h4>
              <Link href="#">Contact</Link>
              <Link href="#">Returns & Exchanges</Link>
              <Link href="#">Help Center</Link>
              <Link href="#">Brexit Info</Link>
            </div>
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 footer-div-h4 text-black font-semibold text-[13px]">
                More
              </h4>
              <Link href="#">Share The Look</Link>
              <Link href="#">About US</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Alphaland</Link>
              <Link href="#">Summer Shredding</Link>
            </div>
            <div className="flex flex-wrap flex-col">
              <h4 className="mb-3 footer-div-h4 text-black font-semibold text-[13px]">
                Address
              </h4>
              <Link href="#">
                13927 South Gessner Road, Missouri City Texas 77489, United
                States
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:flex-nowrap flex-wrap lg:justify-start items-center border-t border-[#3b3b3b] max-w-full lg:border-b-none sm:border-b-gray-500">
            <div className="footer-links-sec  p-6 lg:max-w-[600px] max-w-full border-e border-[#3b3b3b] ">
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
                <h6 className="text-[10px] text-[#131212]">
                  © 2024 &#x2022; Alphalete Athletics LLC | All Rights Reserved
                </h6>
              </aside>
            </div>
            <div className="style-text flex flex-col justify-center  text-center lg:text-start lg:max-w-[968px]  max-w-full p-5 ">
              <p className="text-[13px] text-[#131212] font-semibold ">
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
              <h4 className="form-heading text-black  extrasmall:text-[14px] text-[18px] text-center pt-5">
                STAY CONNECTED
              </h4>
              <div className="sub-input px-6 py-2">
                <div className="">
                  <CustomAuthInput
                    validFn={(value) => true}
                    id='email'
                    type="email"
                    placeholder='liam@acme.com'
                    error={'Enter a valid email'}
                    childType={'subscribe'}
                  />
                  <div className="w-full h-4">
                    <div className='w-full h-[1px] bg-gray-300'></div>
                  </div>

                  <CustomAuthInput
                    validFn={(value) => true}
                    id='phone'
                    type="text"
                    placeholder='(123) 123-1234'
                    error={'Enter a valid phone number'}
                    childType={'subscribe'}
                  />
                  <div className='w-full h-[1px] bg-gray-300'></div>
                  {/* <label className="flex text-white flex-col text-sm text-[9px] gap-3">
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
                  </label> */}
                </div>
                <div className="w-full">
                  <AuthInputButton>Subscribe</AuthInputButton>
                  {/* <button
                    style={{ borderRadius: "50px" }}
                    className="button w-full "
                  >
                    Subscribe
                  </button> */}
                </div>
                <p class="opacity-60 leading-tight text-[8px] text-start">
                  By signing up via text you agree to receive recurring
                  automated marketing messages and shopping cart reminders at
                  the phone number provided. Consent is not a condition of
                  purchase. Reply STOP to unsubscribe. HELP for help. Msg
                  frequency varies. Msg &amp; Data rates may apply. View
                  <Link
                    href="#"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    <ins> Privacy Policy</ins>{" "}
                  </Link>{" "}
                  &amp;&nbsp;
                  <Link
                    href="#"
                    class="relative pb-[2px] whitespace-nowrap snakify-out"
                  >
                    <ins>Terms of Service</ins>
                  </Link>
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

      <div className="flex items-center justify-center px-4 md:px-12 lg:px-[163px] py-0">
        <div className="w-full lg:w-3/4 h- flex items-center justify-center">
          <Image
            layout="responsive"
            height={100}
            width={400}
            objectFit="cover"
            src={footerPhoto}
            alt="cover"
            quality={50}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
