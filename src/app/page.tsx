import { Header } from '@/components/layout/Header';
// import { FaUpload, FaRobot, FaStar, FaQuestionCircle } from "react-icons/fa";
import Aurora from '../../reactbits/Aurora/Aurora';
import { DashboardDisplay } from '@/components/ui/DashboardDisplay';
import { PricingCard } from '@/components/layout/PricingCard';
import { Footer } from '@/components/layout/Footer';
import { FeaturesCard } from '@/components/layout/FeaturesCard';
import { AboutSection } from '@/components/layout/AboutSection';


export default function Home() {
  const steps = [
    {
      title: "Upload Resume",
      // icon: <FaUpload className="text-3xl text-cyan-400" />,
    },
    {
      title: "AI Analysis",
      // icon: <FaRobot className="text-3xl text-purple-400" />,
    },
    {
      title: "Get Ranked & Matched",
      // icon: <FaStar className="text-3xl text-yellow-400" />,
    },
    {
      title: "Generate Interview Questions",
      // icon: <FaQuestionCircle className="text-3xl text-pink-400" />,
    },
  ];

  return (
    <div className="relative w-full h-screen ">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#39FF14", "#C77DFF", "#0B132B"]}
          blend={0}
          amplitude={2}
          speed={0.1}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 -z-9" />

      <Header />

      <div className="flex flex-col items-center justify-end h-[calc(72vh-80px)]">

        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            The Future of Hiring is Here 🚀
          </h2>
          <div className="px-3">
            <p className="text-sm">
              Do you also want me to show you how to apply this as a global background layout
            </p>
            <p className="text-sm">(so it works across all pages) instead of just one page?</p>
          </div>
          <div><button className='bg-black rounded-xl px-6 py-3 mt-10'>Get Started</button></div>
        </div>
      </div>

      <DashboardDisplay />

      <h2 className="text-2xl font-bold mb-12 text-center mt-10">
        How <span className="text-cyan-400">It Works</span>
      </h2>
      <div className='flex justify-center items-start my-6'>

        <div className="flex flex-col items-start space-y-8 relative text-white">
          <div className="absolute left-[9px] top-0 bottom-[-14px] w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="relative z-10 w-5 h-5 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center">
                <span className="text-sm font-semibold text-purple-600">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <AboutSection />
      <FeaturesCard />
      <PricingCard />
      <Footer />
    </div >

  );
}
