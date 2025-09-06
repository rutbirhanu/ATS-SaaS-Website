import Image from "next/image"
import twitter from '../../../public/twitter.png'
import linkedin from '../../../public/linkedin.png'
import facebook from '../../../public/facebook.png'
import github from "../../../public/github.png"

export const Footer = () => {
    return (
        <footer className="relative mt-60">
            {/* Floating Card */}
            <div className="flex justify-center items-center absolute -top-20 w-full px-4">
                <div className="bg-white w-full md:w-[75%] flex flex-col md:flex-row justify-between text-black rounded-xl p-6 md:p-10 gap-6">
                    <h4 className="text-lg md:text-xl font-bold text-center md:text-left">
                        Recruiter & Job Seeker Benefits – Modern & Eye-Catching
                    </h4>
                    <p className="text-sm text-center md:text-left">
                        Highlighting what makes us unique: bridging recruiters and candidates with a shared AI-powered platform.
                    </p>
                </div>
            </div>

            {/* Main Footer */}
            <div className="pt-32 pb-10 px-6 bg-blue-900/30 border border-green-900 shadow-lg rounded-md">
                {/* Subscribe Section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-6 md:gap-12">
                    <p className="text-sm text-center md:text-left max-w-md">
                        Stay in the loop with updates, features, and hiring tips. Subscribe to our newsletter.
                    </p>
                    <div className="flex items-center w-full md:w-1/3 rounded-3xl bg-white/30">
                        <input type="text" placeholder="email" className="px-5 py-[6px] w-full rounded-3xl border-none bg-transparent text-white outline-none" /> <button className="rounded-3xl bg-white/60 px-3 py-[5px] text-black text-sm">Subscribe</button>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
                    {/* Logo Section */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-green-600 mb-3">Logo</h1>
                        <p className="text-sm mb-1">AIATS – Streamlining hiring</p>
                        <p className="text-sm">Our mission: Making recruitment faster</p>
                    </div>

                    {/* About Us */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a href="#">Help Center</a>
                            <a href="#">FAQ</a>
                            <a href="#">API Reference</a>
                            <a href="#">Customer Stories</a>
                        </div>
                    </div>

                    {/* Contact & Legal */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Contact & Legal</h3>
                        <p className="text-sm mb-2">Email: support@aiats.com</p>
                        <div className="flex flex-col space-y-2 text-sm mb-3">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-6 mt-4">
                            <a href="#"><Image src={linkedin} height={22} width={22} alt="LinkedIn" /></a>
                            <a href="#"><Image src={twitter} height={22} width={22} alt="Twitter" /></a>
                            <a href="#"><Image src={facebook} height={22} width={22} alt="Facebook" /></a>
                            <a href="#"><Image src={github} height={22} width={22} alt="GitHub" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 py-3 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} AIATS. All rights reserved.
            </div>
        </footer>
    )
}
