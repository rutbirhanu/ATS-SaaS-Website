export const AboutSection = () => {
    return (
        <section className="relative w-full py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-gray-200">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
        
                  {/* Left Side - Text */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold ">
                      What We Do 🚀
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Our AI-powered ATS is not just another recruitment tool — it’s a
                      futuristic hiring assistant built for both <span className="text-cyan-300">employers</span>
                      and <span className="text-purple-300">candidates</span>.
                      We streamline the process from posting jobs to onboarding, making
                      hiring faster, smarter, and fairer.
                    </p>
        
                    {/* Services List */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-white">✨ Our Services</h3>
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
                            <span>{item}</span>
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
                        <h4 className="text-xl font-bold text-white mb-3">👩‍💻 Your Smart Hiring Assistant</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Imagine hiring that feels less like paperwork and more like magic.
                          That’s what our ATS delivers — automation, insights, and a
                          futuristic experience, all wrapped in a sleek interface.
                        </p>
                      </div>
                    </div>
        
        
                    <div className="relative group">
                      <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-lg shadow-md hover:shadow-purple-500/30 transition transform ">
                        <h3 className="text-xl font-bold text-purple-300 mb-4">
                          Why We’re Different ✨
                        </h3>
                        <ul className="space-y-4 text-gray-300">
                          <li className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                            AI-driven resume parsing for precision matching
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                            Real-time collaboration between HR & candidates
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                            Smart insights & analytics dashboards
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
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