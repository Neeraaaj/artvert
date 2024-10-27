import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (

        // <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-transparent backdrop-blur-lg">
        <div className="sticky inset-x-0 top-0 z-[1000]">
            <div className="container flex items-center justify-between py-8 ">
                <Navigation />
            </div>
        </div>
    );
}