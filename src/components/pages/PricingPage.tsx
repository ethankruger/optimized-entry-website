import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const plans = [
    {
      name: 'TIER 1 — ESSENTIAL',
      subtitle: 'AI Reception Platform + Call Intelligence System',
      price: '$200',
      period: '/month',
      features: [
        'AI-powered reception and call handling',
        'Google Calendar integration',
        'Optimized Entry core software',
        'Inquiry and emergency logging with email follow-ups',
        'Smart call routing',
        'Automated call summaries',
        'Custom greeting and branded business identity voice',
        'Custom FAQ and knowledge base',
      ],
      callPricing: 'Call Pricing: $1.00 per minute (usage-based)',
      buttonText: 'Get started',
      buttonClass: 'bg-brand-green hover:bg-green-700 text-white',
    },
    {
      name: 'TIER 2 — PROFESSIONAL',
      subtitle: 'Advanced Automation & Custom Customer Experience',
      price: '$300',
      period: '/month',
      features: [
        'Everything in Tier 1',
        'Full access to Optimized Entry software dashboard',
        'Full call recording archive (30-day retention)',
        'Newly built customized business website',
        'Integrated AI chat widget embedded into website',
        'Priority support',
        'Priority configuration changes',
      ],
      callPricing: 'Call Pricing: $0.75 per minute (usage-based)',
      buttonText: 'Get started',
      buttonClass: 'bg-brand-green hover:bg-green-700 text-white',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="section max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple pricing for always-on reception
          </h1>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your business. Both plans include a one-time setup fee of $400.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              {/* Header with gradient accent */}
              <div className="p-6 border-b border-slate-200">
                <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-4" />
                <h3 className="text-xl font-bold text-orange-600 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600">{plan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="px-6 pt-6">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-orange-600">{plan.price}</span>
                  <span className="text-slate-600 text-lg">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Available features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call Pricing */}
                <p className="text-sm italic text-slate-600 mb-6">{plan.callPricing}</p>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <Link
                  to="/contact"
                  className={`block w-full py-3 px-6 rounded-xl text-center font-bold transition-all ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage
