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
      <AboutSection />


      <h2 className="text-3xl font-bold mb-12 text-center mt-10 text-white">
        How <span className="text-cyan-400">It Works</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"></div>

        <div className="space-y-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              <div className="w-6/12 p-4 rounded-xl bg-[#111] border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Step {index + 1}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>





      <FeaturesCard />
      <PricingCard />
      <Footer />
    </div >

  );
}
