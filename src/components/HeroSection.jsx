import LeaderImg from "../assets/LeaderImg.png";
import HeroBg from "../assets/SimpleBg.png";

export default function HeroSection() {
    return (
        <section
            id="HeroSection"
            className="
                relative
                min-h-screen
                text-white
                bg-cover
                bg-center
            "
            style={{
                backgroundImage: `url(${HeroBg})`,
            }}
        >

            <div
                className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-8

        min-h-screen
        flex
    "
            >
                <div className="mt-40 md:mt-44">

                    {/* Small Top Line */}
                    <p className="text-sm tracking-widest text-[#CC7E29]">
                        Minister Of External Affairs
                    </p>

                    {/* Heading */}
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight uppercase">
                        <span className="block sm:whitespace-nowrap">
                            Strengthening India’s
                        </span>
                        <span className="block sm:whitespace-nowrap">
                            Voice on the Global Stage
                        </span>
                    </h1>

                    {/* Sub Text – EXTRA BOTTOM SPACE */}
                    <p className="mt-6 mb-14 font-thin text-2xl leading-loose text-gray-300 max-w-xl">
                        Decades of diplomacy, dedication, and decisive
                        leadership for a stronger India.
                    </p>


                    <a
                        href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-8 py-3 bg-[#FB9823] text-white font-semibold tracking-wide rounded-md hover:opacity-90 transition">
                            JOIN THE MOVEMENT
                        </button>
                    </a>


                </div>
            </div>


            {/* DESKTOP IMAGE – BOTTOM RIGHT FIXED */}
            <img
                src={LeaderImg}
                alt="Leader"
                className="
                    hidden md:block
                    absolute bottom-0 right-0
                    h-[85%]
                    object-contain
                    z-0
                "
            />

            {/* MOBILE IMAGE – TEXT KE NICHE */}
            <div className="md:hidden flex justify-center mt-12">
                <img
                    src={LeaderImg}
                    alt="Leader"
                    className="object-contain mb-auto"
                />
            </div>
        </section>
    );
}
