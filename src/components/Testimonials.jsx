import { useRef } from "react";

const testimonials = [
    {
        text: "A rare combination of intelligence, calmness, and conviction.",
        role: "Research Scholar",
        location: "Delhi",
        image: "/assets/Testimonials/T1.png",
    },
    {
        text: "Dr. Jaishankar explains foreign policy with such clarity that every citizen can understand India's global priorities.",
        role: "Student",
        location: "Bangalore",
        image: "/assets/Testimonials/T2.png",
    },
    {
        text: "His leadership during global crises has made every Indian abroad feel safer.",
        role: "Entrepreneur",
        location: "Gujarat",
        image: "/assets/Testimonials/T3.png",
    },
    {
        text: "A rare combination of intelligence, calmness, and conviction.",
        role: "Research Scholar",
        location: "Delhi",
        image: "/assets/Testimonials/T1.png",
    },
];

export default function Testimonials() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -380,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 380,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADING */}
                <p className="text-center text-sm font-semibold text-[#FB9823] mb-3">
                    TESTIMONIALS
                </p>

                <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0B1A45] mb-14">
                    Public Voices That Inspire Confidence
                </h2>

                {/* SLIDER WRAPPER */}
                <div
                    ref={sliderRef}
                    className="
                                flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide
                                cursor-grab active:cursor-grabbing
                                mx-auto
                                justify-start sm:justify-start lg:justify-start
                                max-w-[340px]
                                sm:max-w-[360px]
                                md:max-w-[360px]
                                lg:max-w-[calc(360px*3+32px*2)]
                            "

                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex-shrink-0
                                w-[300px]
                                sm:w-[360px]
                                bg-[#F7F7F7]
                                rounded-2xl px-8 py-10 text-center
                            "
                        >
                            {/* IMAGE */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-18 h-18 rounded-full object-cover"
                                />
                            </div>

                            {/* TEXT */}
                            <p className="text-black font-medium text-lg leading-relaxed mb-6">
                                “{item.text}”
                            </p>

                            {/* ROLE */}
                            <p className="text-base font-semibold text-black">
                                {item.role}
                            </p>

                            <p className="text-sm text-gray-600">
                                {item.location}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={scrollLeft}
                        className="w-11 h-11 rounded-full border border-gray-300
                        flex items-center justify-center hover:bg-[#0B1A45]
                        hover:text-white transition"
                    >
                        ←
                    </button>

                    <button
                        onClick={scrollRight}
                        className="w-11 h-11 rounded-full bg-[#0B1A45] text-white
                        flex items-center justify-center hover:bg-[#FB9823] transition"
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    );
}
