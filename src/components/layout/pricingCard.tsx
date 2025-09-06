export const PricingCard = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: 0,
      period: "/month",
      highlight: false,
      features: [
        "Post 1 Job",
        "Basic Resume Parsing",
        "Candidate Profile View (20 limit)",
      ],
      buttonStyle: "bg-black text-white",
      cardStyle: "bg-white/95 text-black shadow-[0_2px_10px_#EAEAEA]",
    },
    {
      name: "Popular",
      price: 10,
      period: "/month",
      highlight: true,
      features: [
        "2 GB Storage",
        "Apply to Jobs",
        "Generate Interview Questions",
        "Post up to 10 Jobs",
      ],
      buttonStyle: "bg-white text-black",
      cardStyle:
        "bg-gradient-to-b from-gray-900 to-black text-white shadow-[0_5px_13px_#EAEAEA]",
    },
    {
      name: "Pro",
      price: 30,
      period: "/month",
      highlight: false,
      features: [
        "10 GB Storage",
        "Unlimited Job Posts",
        "Advanced Resume Parsing",
        "Generate Interview Questions",
        "Priority Support",
      ],
      buttonStyle: "bg-black text-white",
      cardStyle: "bg-white text-black shadow-[0_2px_10px_#EAEAEA]",
    },
  ];

  return (
    <section className="p-10">
      <div className="container flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mt-10 mb-3">Pricing</h2>
        <p className="text-gray-400 text-center">
          Choose the plan that fits your hiring needs. Upgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-3 max-w-4xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border ${plan.cardStyle} flex flex-col self-end`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              {plan.highlight && (
                <div className="text-xs px-2 py-1 rounded-xl border border-white/50">
                  <span className="bg-[linear-gradient(to_right,_#DD7DDF,_#E1CD86,_#BBCB92,_#71C2EF,_#3BFFFF,_#DD7DDF)] bg-clip-text text-transparent font-medium">
                    Most Popular
                  </span>
                </div>
              )}
            </div>

            <div className="mt-3">
              <span className="font-bold text-3xl tracking-tighter">
                ${plan.price}
              </span>
              <span className="pl-1 text-sm tracking-tight font-bold opacity-75">
                {plan.period}
              </span>
            </div>

            <button
              className={`${plan.buttonStyle} px-9 py-2 rounded text-sm mt-7`}
            >
              Get Started
            </button>

            <ul className="flex flex-col gap-3 mt-8 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-3 text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
