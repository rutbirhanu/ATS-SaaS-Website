import Image from "next/image"
import dashboard_1 from "../../../public/dashboard_1.png"
import dashboard_2 from "../../../public/dashboard_2.png"
import dashboard_3 from "../../../public/dashboard_3.png"
import dashboard_4 from "../../../public/dashboard_4.png"

export const DashboardDisplay = () => {
    return (
        <div className='relative mx-10 rounded-2xl mt-20 mb-16 text-black'>
            <div className="absolute inset-0 top-5 bottom-9 border-2 border-white rounded-2xl" />

            <div className="relative flex p-2 gap-5 items-start justify-center">
                <div className="rotate-[-5deg] rounded-xl shadow-md shadow-amber-100 overflow-hidden">
                    <Image src={dashboard_4} alt="dashboard preview 4" height={400} className="rounded-2xl" />
                </div>
                <div className="rotate-[-5deg] rounded-xl shadow-md shadow-purple-100 overflow-hidden">
                    <Image src={dashboard_2} alt="dashboard preview 2" height={350} className="rounded-2xl" />
                </div>
                <div className="rotate-[4deg] rounded-xl shadow-md  shadow-green-100 overflow-hidden">
                    <Image src={dashboard_3} alt="dashboard preview 3" height={400} className="rounded-2xl" />
                </div>
                <div className="rotate-[4deg] rounded-xl shadow-md shadow-blue-100 overflow-hidden">
                    <Image src={dashboard_1} alt="dashboard preview 1" height={350} className="rounded-2xl" />
                </div>
            </div>
        </div>
    )
}
