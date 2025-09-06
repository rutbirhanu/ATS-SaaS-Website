import Image from "next/image"
import handshake from "../../../public/handshake.png"
import efficiency from "../../../public/efficiency.png"
import search from "../../../public/search.png"
import star from "../../../public/star.png"

export const AboutSection = () => {
    return (
        <section className="relative w-5/6  mx-auto  py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-gray-200">
            <Image src={star} height={40} width={40} alt="star" className="absolute top-30 -left-10"/>
            <Image src={handshake} height={40} width={40} alt="handshake" className="absolute top-[95%] -left-13" />
            <Image src={search} height={40} width={40} alt="search" className="absolute bottom-10 -right-13"/>
            <Image src={efficiency} height={40} width={40} alt="efficiency" className="absolute top-33 -right-10"/>
            <h2 className="text-3xl font-bold mb-20 text-center">
                What We Do 🚀
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text */}
                <div className="space-y-6">

                    <p className="text-[16px] text-gray-400 leading-relaxed">
                        Our AI-powered ATS is not just another recruitment tool — it’s a
                        futuristic hiring assistant built for both <span className="text-cyan-300">employers</span>
                        and <span className="text-purple-300">candidates</span>.
                        We streamline the process from posting jobs to onboarding, making
                        hiring faster, smarter, and fairer.
                    </p>

                    {/* Services List */}
                    <div className="space-y-4 mt-20">
                        <h3 className="text-xl font-semibold text-white">✨ Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                "Smart Candidate Matching using AI & NLP",
                                "Bias-Free Shortlisting that focuses only on skills",
                                "One-Click Interview Scheduling with calendar sync",
                                "Real-Time Team Collaboration & Feedback",
                                "Talent Analytics Dashboard with predictive insights",
                                "Candidate-Centered Experience with transparent tracking"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    {/* <CheckCircle2 className="text-cyan-400 mt-1" size={20} /> */}
                                    <span className='text-green'>✓</span>
                                    <span >{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                {/* Right Side - Illustration */}
                <div>
                    <div className="relative flex justify-center">

                        <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-30 absolute" />
                        <div className="relative bg-gradient-to-tr from-[#1a1a1a] to-[#222] border border-white/10 shadow-lg rounded-2xl p-6 max-w-sm">
                            <h4 className="text-[17px] font-bold text-white mb-3">👩‍💻 Your Smart Hiring Assistant</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Imagine hiring that feels less like paperwork and more like magic.
                                That’s what our ATS delivers — automation, insights, and a
                                futuristic experience, all wrapped in a sleek interface.
                            </p>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="p-5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-lg shadow-md hover:shadow-purple-500/30 transition transform ">
                            <h3 className="text-[17px] font-bold text-purple-300 mb-4">
                                Why We’re Different ✨
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    AI-driven resume parsing for precision matching
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                    Real-time collaboration between HR & candidates
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                                    Smart insights & analytics dashboards
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                                    Human-friendly & bias-free shortlisting
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}