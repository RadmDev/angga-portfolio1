import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col lg:mt-48 text-color-white order-2 lg:order-1">
        <div className="flex flex-col gap-2 lg:gap-8">
          <h1 className="text-[36px] lg:text-6xl font-bold">Angga Rizki</h1>
          <p className="text-[16px] lg:text-2xl font-semibold text-color-primary">
            Full Stack Developer,{" "}
            <span className="text-color-white">Indonesia</span>
          </p>
        </div>
        <div className="mt-12 lg:mt-16">
          <div className="flex gap-4">
            <Image
              src="/images/nodejs.png"
              alt="technology"
              width="72"
              height="72"
              className="w-[56px] lg:w-[72px]"
            />
            <Image
              src="/images/nextjs.png"
              alt="technology"
              width="72"
              height="72"
              className="w-[56px] lg:w-[72px]"
            />
            <Image
              src="/images/expressjs.png"
              alt="technology"
              width="72"
              height="72"
              className="w-[56px] lg:w-[72px]"
            />
          </div>
          <div className="mt-4 text-color-gray-text-2">
            <p className="text-base lg:text-xl">
              Hey 👋 I am ready to start working together building
              <br className="hidden lg:flex" /> the amazing website 😎
            </p>
          </div>
        </div>
        <div>
          <button className="flex gap-5 items-center text-xl font-medium mt-16 text-color-white border-2 border-color-white px-6 py-4 rounded-full hover:text-color-black hover:bg-color-white transition-all duration-300 ease-in-out focus:ring-4 focus:ring-color-gray-text-2 focus:border-color-black">
            Hire Me
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="w-[328px] h-[302px] lg:w-[811px] lg:h-[749px] mt-12 order-1 lg:order-2">
        <Image
          src="/images/profile.png"
          alt="profile"
          width="811"
          height="749"
        />
      </div>
    </div>
  );
};

export default Hero;
