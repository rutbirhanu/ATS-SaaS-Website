import { Header } from '@/components/layout/Header';
// import { FaUpload, FaRobot, FaStar, FaQuestionCircle } from "react-icons/fa";
import Aurora from '../../reactbits/Aurora/Aurora';
import { DashboardDisplay } from '@/components/ui/DashboardDisplay';
import { Footer } from '@/components/layout/Footer';
import { FeaturesCard } from '@/components/layout/FeaturesCard';
import { AboutSection } from '@/components/layout/AboutSection';
import { FaRegDotCircle } from 'react-icons/fa';
import { PricingCard } from '@/components/layout/PricingCard';

export default function Home() {
  const steps = [
    {
      title: "Sign Up",
      description:"Include the neccessary credientials depending on your role user / recruiter"
    },
    {
      title: "AI Scans & Matches",
      description: 'Our algorithms parse resumes, job descriptions, and skills to instantly generate top candidate/job matches.'
    },
    {
      title: "Ranked Results in Seconds",
      description: "No endless scrolling: both recruiters and job seekers see AI-prioritized results."
    },
    {
      title: "Smart Notifications",
      description: "Get alerts when a candidate or job perfectly matches."
    },
    {
      title: "Track & Collaborate",
      description: "Recruiters manage pipelines with teammates, while job seekers track applications in real time."
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

      <div className="flex flex-col items-center justify-end md:justify-center md:h-[calc(80vh-80px)] px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-700 bg-clip-text text-transparent mb-4">
            The Future of Hiring is Here 🚀
          </h2>
          <div className="px-2 sm:px-6 lg:w-[60%] mx-auto">
            <p className="text-sm sm:text-base mb-2">
              Our AI-driven ATS helps recruiters find the right candidates in minutes, and job seekers land their dream roles with optimized applications.
              Transform your hiring with explainable AI that reduces bias, accelerates decisions, and integrates seamlessly with your existing workflow.
            </p>

          </div>
          <div>
            <button className="px-5 py-2 mt-8 rounded-xl text-white font-semibold 
      bg-gradient-to-r from-cyan-800 to-purple-800 
      border
      shadow-[8px_8px_16px_#050505,-8px_-8px_16px_#151515] 
      transition-all duration-300">
              Get Started
            </button>

          </div>
        </div>
      </div>

      <DashboardDisplay />
      <AboutSection />


      <h2 className="text-3xl font-bold mb-12 text-center mt-20 text-white">
        How <span className="text-blue-400">It Works</span>
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
              <div className="w-6/12 p-4 rounded-xl bg-[#222] border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition">
                <h3 className="text-[16px] font-semibold text-blue-400 mb-1">
                  Step {index + 1}
                </h3>
                <p className="text-[15px] text-gray-300 leading-relaxed underline decoration-blue-400">{step.title}</p>
                <div className='flex gap-5 items-center justify-between'>
                  <span>
                    <FaRegDotCircle size={10} />
                  </span>
                  <p className="text-[13px] text-gray-300 leading-relaxed mt-2">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <FeaturesCard />
      <PricingCard/>
      <Footer />
    </div >

  );
}
