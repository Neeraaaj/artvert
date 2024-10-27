import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { Services } from "./Services";

export default function HeroSection() {
    return (
        <div className="bg-white relative">
            {/* SVG Background */}
            <svg 
                viewBox="0 0 1440 363" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute top-0 left-0 w-full h-auto z-0"
            >
                <path 
                    d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                    stroke="#D96ED4" 
                    strokeOpacity="0.5" 
                    strokeWidth="5" 
                    strokeDashoffset="0px" 
                    strokeDasharray="1644.7393798828125px 1644.7393798828125px" 
                />
            </svg>

            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between relative z-10">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    <p className="tracking-widest text-2xl font-bold">We Work To Make</p>
                    <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
                      Your <span className="text-orange-500">Brand</span> and <br /> <span className="text-orange-500">Art</span>
                    </h1>
                    <p className="pb-6 text-gray-800 xl:pb-10 text-xl">
                        Get Properly Advertised
                    </p>
                    <p className="pb-6 text-gray-500 xl:pb-10 text-xl">
                         Contact Us For Any Brand Advertisement Or Painting High Quality Murals, We Work With Professional Graffiti And Street Artists.
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                <div className="w-1/2">
                    <Image 
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f298c209384867.66fe8eb60f772.jpg" 
                        width={800} 
                        height={500} 
                        alt="" 
                        className="absolute xl:h-[448px] xl:w-[700px] lg:h-[500px] lg:w-[500px] hidden lg:block rounded-md shadow-xl rounded-bl-[5vw]" 
                    />
                </div>
            </div>

            <Services />
        </div>
    );
}
