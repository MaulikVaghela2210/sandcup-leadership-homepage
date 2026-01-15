const newsData = [
    {
        img: "/assets/News/N1.png",
        date: "December 2025",
        title: "Modi–Putin Tango: EAM S Jaishankar Set To Receive Russian President Vladimir Putin",
        desc: "EAM S. Jaishankar is set to receive Russian President Vladimir Putin as he arrives for high-level talks in New Delhi, marking a significant moment.",
    },
    {
        img: "/assets/News/N2.png",
        date: "December 2025",
        title: "India flags US visa cancellations for Indian students after new policy scrutiny",
        desc: "Jaishankar highlights intensified social media vetting and says terminations are automatic losses that could impact visa decisions and national security.",
    },
    {
        img: "/assets/News/N3.png",
        date: "December 2025",
        title: "Punjab has maximum cases of human trafficking: Jaishankar in Rajya Sabha",
        desc: "External Affairs Minister Jaishankar said the Punjab Government has constituted an SIT and a fact-finding committee to look into cases of human trafficking.",
    },
];

export default function News() {
    return (
        <section id="News" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADING */}
                <div className="text-center mb-12">
                    <p className="text-[#FB9823] uppercase tracking-widest text-sm mb-3">
                        News & Update
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1A45] max-w-3xl mx-auto">
                        Stay informed with recent speeches, interviews, and press releases
                    </h2>
                </div>

                {/* NEWS CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden
                                       shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* IMAGE */}
                            <div className="h-[220px] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover
                                               hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">
                                <p className="text-xs text-gray-400 mb-2">
                                    {item.date}
                                </p>

                                <h3 className="text-[#0B1A45] font-semibold text-lg leading-snug mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-5">
                                    {item.desc}
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto block"
                                >
                                    <button className="ml-auto block text-[#FB9823] text-sm font-thin hover:underline">
                                        READ MORE
                                    </button>
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
