export const Footer = () => {
    return (
        <footer className="relative mt-60">
            <div className="flex justify-center items-center absolute -top-23">
                <div className="bg-white w-[75%] flex justify-between text-black rounded-xl p-10 gap-15">
                    <h4 className="text-xl font-bold">Recruiter part and the third both common modern and eye catching</h4>
                    <p className="text-sm">job seeker part and the second to be explaining both common part i want smaller card in the middle like intersecting part i want the desing to be modern and eye catching</p>
                </div>
            </div>
            <div className="pt-30 pb-10 px-15 bg-blue-950">
                <div className="flex justify-between items-center py-5 gap-30">
                    <p>job seeker part and the second to be explaining both common part i want smaller card in the middle like </p>
                    <div className="flex items-center w-1/3 rounded-3xl border-none bg-white/30">
                        <input type="text" placeholder="email" className="px-5 py-[6px] w-full rounded-3xl border-none bg-transparent text-white outline-none" />
                        <button className="rounded-3xl bg-white/60 px-3 py-[5px] text-black text-sm">Subscribe</button>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <h1 className="text-5xl font-bold text-green-600">Logo</h1>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm mb-2">AIATS – Streamlining hiring </p>
                        <p className="text-sm mb-2">Our mission: Making recruitment faster</p>
                        <div className="flex flex-col text-sm space-y-1">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <div className="flex flex-col text-sm space-y-1">
                            <a href="#">Help Center</a>
                            <a href="#">FAQ</a>
                            <a href="#">API Reference</a>
                            <a href="#">Customer Stories</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact & Legal</h3>
                        <p className="text-sm mb-2">Email: support@aiats.com</p>
                        <p className="text-sm mb-2">Phone: +1 (555) 123-4567</p>
                        <div className="flex flex-col text-sm space-y-1 mb-2">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="flex space-x-3">
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 py-2">@copyright reserved</div>
        </footer>
    )
}