import Image from "next/image"
import dashboard_1 from "../../../public/dashboard_1.png"
import dashboard_2 from "../../../public/dashboard_2.png"
import dashboard_3 from "../../../public/dashboard_3.png"
import dashboard_4 from "../../../public/dashboard_4.png"

export const DashboardDisplay = () => {
  return (
    <div className="relative mx-4 md:mx-10 rounded-2xl my-20 text-black lg:my-5">
      <div className="absolute inset-0 top-5 bottom-9 border-2 border-white rounded-2xl" />

      <div
        className="
          relative p-2 gap-5 
          grid grid-cols-2 md:flex md:items-start md:justify-center
        "
      >
        <div className="rotate-[-5deg] rounded-xl shadow-md shadow-amber-100 overflow-hidden">
          <Image
            src={dashboard_4}
            alt="dashboard preview 4"
            className="rounded-2xl w-full h-auto"
          />
        </div>
        <div className="rotate-[-5deg] rounded-xl shadow-md shadow-purple-100 overflow-hidden">
          <Image
            src={dashboard_2}
            alt="dashboard preview 2"
            className="rounded-2xl w-full h-auto"
          />
        </div>
        <div className="rotate-[4deg] rounded-xl shadow-md shadow-green-100 overflow-hidden">
          <Image
            src={dashboard_3}
            alt="dashboard preview 3"
            className="rounded-2xl w-full h-auto"
          />
        </div>
        <div className="rotate-[4deg] rounded-xl shadow-md shadow-blue-100 overflow-hidden">
          <Image
            src={dashboard_1}
            alt="dashboard preview 1"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
