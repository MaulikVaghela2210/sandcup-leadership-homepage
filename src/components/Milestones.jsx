import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CARD_WIDTH = 300;
const GAP = 24;

const milestonesData = [
    {
        img: "/assets/Milestones/SBR1.png",
        title: "Diplomatic Breakthrough",
        desc: "Signed key agreements strengthening India's international relations.",
    },
    {
        img: "/assets/Milestones/SBR2.png",
        title: "Global Partnerships",
        desc: "Forged partnerships in trade, defense, and technology.",
    },
    {
        img: "/assets/Milestones/SBR3.png",
        title: "UN Engagement",
        desc: "Enhanced India's presence and influence at the UN.",
    },
    {
        img: "/assets/Milestones/SBR1.png",
        title: "Strategic Diplomacy",
        desc: "Strengthening India's global voice.",
    },
];

export default function Milestones() {
    const [current, setCurrent] = useState(1);

    const prev = () => {
        setCurrent((p) => (p === 0 ? milestonesData.length - 1 : p - 1));
    };

    const next = () => {
        setCurrent((p) => (p === milestonesData.length - 1 ? 0 : p + 1));
    };

    return (
        <section id="Milestones" className="py-20 bg-white">
            {/* TITLE */}
            <div className="text-center mb-14 px-4">
                <p className="text-[#FB9823] tracking-widest uppercase text-sm">
                    Key Initiatives
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1A45]">
                    Milestones That Strengthened <br /> India’s Global Standing
                </h2>
            </div>

            {/* CAROUSEL WRAPPER */}
            <div className="relative max-w-[1280px] mx-auto flex items-center">

                {/* LEFT BUTTON */}
                <button
                    onClick={prev}
                    className="absolute left-4 md:left-10 z-20 w-12 h-12
                    rounded-full border-2 border-[#0B1A45]
                    flex items-center justify-center
                    hover:bg-[#0B1A45] transition"
                >
                    <FaChevronLeft className="text-[#0B1A45] hover:text-white" />
                </button>

                {/* VIEWPORT */}
                <div
                    className="overflow-hidden py-16 mx-auto w-full md:w-auto"
                    style={{
                        maxWidth: `${CARD_WIDTH * 3 + GAP * 2}px`,
                    }}
                >
                    <div
                        className="flex gap-6 transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing"
                        style={{
                            transform: `translateX(-${current * (CARD_WIDTH + GAP) - (CARD_WIDTH + GAP)}px)`,
                        }}
                    >
                        {milestonesData.map((item, idx) => {
                            const isCenter = idx === current;

                            return (
                                <div
                                    key={idx}
                                    className={`relative flex-shrink-0
                                    w-[90vw] sm:w-[90vw] md:w-[300px]
                                    h-[420px]
                                    rounded-2xl overflow-hidden
                                    transition-all duration-700
                                    ${isCenter ? "scale-110 z-10" : "scale-90"}
                                    `}
                                >
                                    {/* IMAGE */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute bottom-0 left-0 w-full
                                    bg-gradient-to-t from-black/80 to-transparent
                                    p-5">
                                        <h3 className="text-white text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 text-sm mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT BUTTON */}
                <button
                    onClick={next}
                    className="absolute right-4 md:right-10 z-20 w-12 h-12
                    rounded-full border-2 border-[#0B1A45]
                    flex items-center justify-center
                    hover:bg-[#0B1A45] transition"
                >
                    <FaChevronRight className="text-[#0B1A45] hover:text-white" />
                </button>
            </div>
        </section>
    );
}
