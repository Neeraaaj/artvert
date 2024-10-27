import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-4xl text-center font-extrabold leading-tight text-gray-800 lg:text-5xl" >An Aesthetic Space Finds <span className="text-orange-600"> Harmony </span> Through  <br /> 
                    <span className="flex text-center mx-auto justify-center" >  
                        <Image src="/image/Easel-2.svg" className="font-medium" width={150} height={150} />

                        <h1 className="mt-10"><span className="text-green-400">A</span><span className="text-yellow-400">R</span><span className="text-violet-200">T</span></h1>
                    </span>
                </a>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center rounded-2xl">
                <div>
                    <Image src="https://cdn.dribbble.com/userupload/7989512/file/original-82390b87c6067281eb218bb139ca499c.jpeg?resize=1200x793" width={900} height={500} alt="" className="rounded-2xl drop-shadow-xl shadow-xl" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 ">
                        <span className="font-extrabold text-green-500 text-md lg:text-3xl">Transforming Spaces with Unique Hand-Painted Murals</span>

                        <br />
                        <br />
                        At ARTVERT, we are a premier advertising agency based in Mumbai, specializing in high-quality, hand-painted murals that bring your brand to life. Our team collaborates with talented graffiti and street artists from across India to deliver exceptional projects tailored for every client, from major brands to local councils.
                    </p>
                    {/* <div className="flex px-12 pt-4 gap-x-4 ">
                        <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}