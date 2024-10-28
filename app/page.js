import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CompanySection /> */}
      <AboutComponent />
      <div className="flex flex-col text-center justify-center">
        <h1 className="font-extrabold text-gray-900 text-6xl m-5 uppercase">What We Bring to Your 
        </h1>
        <span className="mx-auto"> 
          <Image src="/image/wall-1.svg" width={80} height={80} className="w-[25vw] h-[25vh]"/>
        </span>
      </div>
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
