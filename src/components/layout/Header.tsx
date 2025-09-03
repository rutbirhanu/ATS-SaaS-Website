export const Header = () => {
    return (
        <div className="flex justify-center sticky">
            <div className="bg-white rounded-xl my-4 pl-6 w-fit drop-shadow-xl drop-shadow-gray-600">
                <div className="flex items-center ">
                    <nav className="text-black flex justify-between gap-8 py-[6px] text-sm">
                        <p>#</p>
                        <a href="#">Home</a>
                        <a href="#">Platform</a>
                        <a href="#">About</a>
                        <a href="#">Pricing</a>
                    </nav>
                    <button className="bg-black rounded-xl p-[6px] px-3 ml-10 text-sm">Get Started</button>
                </div>
            </div>
        </div>
    )
}