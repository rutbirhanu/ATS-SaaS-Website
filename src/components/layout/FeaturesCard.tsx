export const FeaturesCard = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="flex flex-col items-center mt-30 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-electricBlue mb-4">
          Built for Candidates and Employers
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Powerful AI tools designed to help both job seekers and employers.
        </p>
      </div>

      {/* Cards Section */}
      <div className="bg-[#0a0a0a] flex items-center justify-center px-6 py-16">
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-8 md:gap-0">
          {/* Job Seekers Card */}
          <div className="w-full md:w-[45%] bg-black rounded-2xl border border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.6)] p-8 text-white">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              For Job Seekers
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✔ AI Resume Analysis</li>
              <li>✔ Instant feedback & ranking</li>
              <li>✔ Tailored resume suggestions</li>
              <li>✔ Match with relevant job posts</li>
            </ul>
          </div>

          {/* Employers Card */}
          <div className="w-full md:w-[45%] bg-black rounded-2xl border border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.6)] p-8 text-white md:text-right">
            <h2 className="text-xl font-bold mb-4 text-purple-400">
              For Employers
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✔ AI-Powered Interview Questions</li>
              <li>✔ Resume screening & ranking</li>
              <li>✔ Candidate insights dashboard</li>
              <li>✔ Save hiring time & costs</li>
            </ul>
          </div>

          {/* Shared Features Card */}
          <div className="w-full md:w-[28%] md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 bg-white text-black rounded-xl border border-cyan-400/70 shadow-[0_0_25px_rgba(34,211,238,0.7)] p-6 max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-cyan-600">
              Shared Features
            </h2>
            <ul className="space-y-2 text-sm">
              <li>✔ Smart Matching</li>
              <li>✔ AI-powered recommendations</li>
              <li>✔ Faster and fairer recruitment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
