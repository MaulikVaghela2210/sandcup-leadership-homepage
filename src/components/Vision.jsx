import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const visionData = [
    {
        title: "A Secure & Confident India",
        desc: "Strengthening national security through global alliances, advanced technology partnerships, and diplomatic engagement that protects India’s interests.",
    },
    {
        title: "Empowering India’s Youth",
        desc: "Creating more opportunities for global education, cultural exchange, scholarships, internships, and international exposure.",
    },
    {
        title: "India as a Global Decision-Maker",
        desc: "Positioning India as a key contributor to world issues—economy, climate, technology, and peace-building.",
    },
];

export default function Vision() {
    const [active, setActive] = useState(0);

    const prev = () => {
        setActive(active === 0 ? visionData.length - 1 : active - 1);
    };

    const next = () => {
        setActive(active === visionData.length - 1 ? 0 : active + 1);
    };

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* TOP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10
                                text-center lg:text-left">

                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-[#FB9823] uppercase tracking-widest text-sm mb-2">
                            Vision
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1A45]">
                            A Clear Roadmap for India’s <br /> Global Future
                        </h2>
                    </div>

                    <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl
                                  max-w-lg mx-auto lg:mx-0
                                  flex items-center">
                        Dr. Jaishankar envisions an India that is strong, secure,
                        globally respected, and prepared for the opportunities of tomorrow.
                    </p>
                </div>

                {/* IMAGE (STATIC) */}
                <div className="rounded-2xl overflow-hidden mb-12">
                    <img
                        src="/assets/Vision/vision.png"
                        alt="Vision"
                        className="w-full h-[240px] sm:h-[340px] md:h-[420px] object-cover"
                    />
                </div>

                {/* CONTENT SLIDER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    {visionData.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`cursor-pointer pb-4 transition-all duration-500
                            ${active === idx
                                    ? "border-b-2 border-[#FB9823] opacity-100"
                                    : "border-b border-gray-200 opacity-50"
                                }`}
                        >
                            <h3 className="font-semibold text-[#0B1A45] mb-2">
                                {item.title}
                            </h3>

                            <p
                                className={`text-sm text-gray-600 transition-all duration-500
                                ${active === idx
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-2 opacity-0 md:opacity-100"
                                    }`}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* NAV BUTTONS */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border
                        flex items-center justify-center
                        hover:border-[#0B1A45]"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-[#0B1A45] text-white
                        flex items-center justify-center"
                    >
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </section>
    );
}
