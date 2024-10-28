import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="bg-[url('https://cdn.dribbble.com/users/730703/screenshots/11117662/media/1be27267eb26eda1aab42eed018a9658.jpg?resize=1000x750&vertical=center')] bg-center bg-cover bg-opacity-10 backdrop-blur-sm">
                <h1 className="container py-32 text-6xl font-extrabold tracking-widest text-center text-white lg:py-64 lg:text-left">WHO ARE WE?</h1>
            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl uppercase">Creative Concepts & <span className="text-green-400 font-extrabold">Mural Design</span> Solutions
                    </h2>
                    <p className="text-md max-w-xl  lg:w-1/2">
                        ARTVERT is your go-to agency for unique mural designs that elevate any space. We collaborate with talented graffiti and street artists from across India to create captivating murals for homes, offices, and public areas. Our experienced team ensures that each project not only enhances the aesthetic of your space but also transforms it into a memorable landmark. Whether you want to make a bold statement or add subtle charm, we tailor our designs to reflect your vision and engage your audience.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-[120vw]">
                        <Image src="https://cdn.dribbble.com/users/788099/screenshots/9917303/media/0f0139f4ccf40e8dc657db7edfc97ac6.png?resize=800x600&vertical=center" width={700} height={700} alt="" className="rounded-[50px]" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                            At ARTVERT, we are an international agency dedicated to revolutionizing the landscape of mural artistry. We believe it’s essential to rethink how art interacts with architecture and community. Our initiative, Confluence, integrates innovative perspectives on society while employing contemporary methods and tools that enhance creativity, production, and communication. Our handcrafted portfolio showcases our diverse projects, illustrating the power of murals to transform spaces and engage audiences in meaningful ways.
                            <br />
                        </p>
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Read More <TbArrowUpRight className="text-xl" /> </a>


                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile1.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="/image/profile3.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                    Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}