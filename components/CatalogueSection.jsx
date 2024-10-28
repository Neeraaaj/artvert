"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "EDUCATIONAL MURAL",
            title: "Inspire Learning",
            image: "https://i.pinimg.com/564x/a7/78/0d/a7780df27a228ebb3cabdd9461c3a7d9.jpg",
            description: "Transform your space with vibrant educational murals that engage and inspire curiosity in children and adults alike.",
        },
        {
            id: "02",
            catagory: "CORPORATE MURALS",
            title: "Elevate Your Brand",
            image: "https://i.pinimg.com/564x/4b/61/43/4b6143ad2924a8821d9dc5ad02019e5a.jpg",
            description: "Create a professional atmosphere with custom corporate murals that reflect your brand identity and values.",
        },
        {
            id: "03",
            catagory: "LIVING ROOM MURALS",
            title: "Create Your Oasis",
            image: "https://i.pinimg.com/564x/fe/0e/8f/fe0e8f69e9af5885500eb2d8b6cf685f.jpg",
            description: "Enhance your living room with stunning murals that set the mood and create a welcoming environment for relaxation and gatherings.",
        },
        {
            id: "04",
            catagory: "CUSTOM MURAL",
            title: "Your Imagination, Our Canvas",
            image: "https://i.pinimg.com/564x/c4/2e/3e/c42e3ec4f10c5e76518948d4de4190a5.jpg",
            description: "Bring your vision to life with a custom mural tailored to your unique style and preferences, perfect for any space.",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="relative overflow-hidden group">
                        <div>
                            <Image src={item.image} width={380} height={100} alt="" className="w-full min-h-[fit-content]" />
                        </div>
                        <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur rounded-2xl shadow-xl" >
                            <div className="flex justify-between pb-4 ">
                                <p className="text-sm">{item.catagory}</p>
                                <span className="text-sm ">{item.id}</span>
                            </div>
                            <a className="block text-xl font-extrabold" href="">{item.title}</a>
                            <p className="py-4 text-gray-500">{item.description}</p>
                            <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
                        </div>

                        <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                            <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                            <span className="">
                                {item.id}
                            </span>

                        </div>
                    </div>
                ))}
        </div>
    )
}