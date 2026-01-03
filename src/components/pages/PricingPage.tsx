import React from 'react'
import { Check, Phone, TrendingUp, Zap, Building2, Wrench, Calendar, Bot, Bell, MessageSquare, Users, LayoutDashboard, ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import { Button } from '@/components/ui/button'

const PricingPage = () => {
  const header = useScrollAnimation()
  const cardsSection = useScrollAnimation()
  const setupFee = useScrollAnimation()
  const featuresSection = useScrollAnimation()
  const addonsSection = useScrollAnimation()

  const plans = [
    {
      name: "Starter",
      icon: Wrench,
      calls: "50",
      price: 89,
      overage: "$2.00",
      bestFor: "New businesses or low volume",
      borderColor: "border-slate-200",
      accentColor: "slate",
    },
    {
      name: "Growth",
      icon: TrendingUp,
      calls: "150",
      price: 220,
      overage: "$1.80",
      bestFor: "Small/medium home-service companies",
      borderColor: "border-green-200",
      accentColor: "green",
    },
    {
      name: "Pro",
      icon: Zap,
      calls: "400",
      price: 510,
      overage: "$1.60",
      bestFor: "Busy teams that want full intake support",
      borderColor: "border-orange-200",
      accentColor: "orange",
    },
    {
      name: "Enterprise",
      icon: Building2,
      calls: "Custom",
      price: "Custom",
      overage: "Volume-discounted",
      bestFor: "Multi-tech teams & franchises",
      borderColor: "border-purple-200",
      accentColor: "purple",
      isCustom: true,
    },
  ]

  const features = [
    {
      icon: Bot,
      title: "AI Call Answering",
      description: "Smart AI handles every call professionally",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Instant Booking and Google Calendar Sync",
      description: "Customers book appointments 24/7 with seamless integration",
      color: "orange"
    },
    {
      icon: MessageSquare,
      title: "Call Summaries",
      description: "Full call summaries with notes and recordings",
      color: "purple"
    },
    {
      icon: Users,
      title: "Smart Routing",
      description: "Calls routed to the right person, every time",
      color: "blue"
    },
    {
      icon: Bell,
      title: "Instant Emergency Alerts",
      description: "Urgent calls flagged and logged immediately",
      color: "green"
    },
    {
      icon: LayoutDashboard,
      title: "Access to Optimized Entry Portal",
      description: "Full access to dashboard, analytics, invoice sending, and more",
      color: "orange"
    },
  ]

  // Simple consistent icon - all circles
  const SimpleIcon = ({ Icon, color }: { Icon: any, color: string }) => {
    const bgColor = color === 'green' ? 'bg-brand-green' 
      : color === 'orange' ? 'bg-brand-orange'
      : color === 'purple' ? 'bg-purple-500'
      : 'bg-blue-500'
    
    return (
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center shadow-md`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    )
  }

  // Plan icon - consistent circles
  const PlanIcon = ({ Icon, color }: { Icon: any, color: string }) => {
    const bgColor = color === 'green' ? 'bg-brand-green' 
      : color === 'orange' ? 'bg-brand-orange'
      : color === 'purple' ? 'bg-purple-500'
      : 'bg-slate-700'
    
    return (
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center shadow-md`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-slate-100 rounded-full" />
        <div className="absolute top-28 right-28 w-4 h-4 bg-brand-green rounded-full" />
        <div className="absolute bottom-32 left-16 w-16 h-16 border border-dashed border-orange-200 rounded-full" />
        <div className="absolute bottom-40 left-24 w-3 h-3 bg-brand-orange rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-green" />
              <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Simple Pricing</span>
              <div className="w-8 h-px bg-brand-green" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Never miss a customer call again.
              <br />
              <span className="text-brand-green">Choose the plan that fits.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Designed for contractors, plumbers, HVAC, electricians, and more.
            </p>
          </div>

          {/* Pricing Cards */}
          <div
            ref={cardsSection.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {plans.map((plan, index) => {
              const delay = index * 100
              return (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-3xl shadow-lg border-2 ${plan.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                  cardsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="p-6 flex flex-col flex-grow">
                  {/* Plan Icon */}
                  <div className="mb-4">
                    <PlanIcon Icon={plan.icon} color={plan.accentColor} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>

                  {/* Call Limit - PROMINENT */}
                  <div className={`mb-4 p-4 rounded-2xl border-2 ${
                    plan.accentColor === 'green' ? 'bg-green-50 border-green-200' :
                    plan.accentColor === 'orange' ? 'bg-orange-50 border-orange-200' :
                    plan.accentColor === 'purple' ? 'bg-purple-50 border-purple-200' :
                    'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-sm text-slate-600 font-semibold mb-1">Included Calls</div>
                    {plan.isCustom ? (
                      <div>
                        <div className={`text-4xl font-black ${
                          plan.accentColor === 'purple' ? 'text-purple-600' : 'text-slate-900'
                        }`}>Custom</div>
                        <div className="text-xs text-slate-500 mt-1">(500+ calls per month)</div>
                      </div>
                    ) : (
                      <div className={`text-4xl font-black ${
                        plan.accentColor === 'green' ? 'text-brand-green' :
                        plan.accentColor === 'orange' ? 'text-brand-orange' :
                        'text-slate-900'
                      }`}>
                        {plan.calls}
                      </div>
                    )}
                    {!plan.isCustom && <div className="text-xs text-slate-500 mt-1">calls per month</div>}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      {plan.isCustom ? (
                        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-sm text-slate-600">$</span>
                          <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                          <span className="text-slate-600">/mo</span>
                        </>
                      )}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      <span className="font-semibold">{plan.overage}</span> per call overage
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-6 p-3 bg-slate-50 rounded-xl">
                    <div className="text-xs text-slate-500 font-semibold mb-1">BEST FOR</div>
                    <div className="text-sm text-slate-700">{plan.bestFor}</div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    variant={
                      plan.accentColor === 'green' ? 'default' : 
                      plan.accentColor === 'orange' ? 'orange' : 
                      plan.accentColor === 'purple' ? 'purple' : 'dark'
                    }
                    className="w-full mt-auto"
                  >
                    <Link to="/get-a-demo">
                      {plan.isCustom ? 'Get Custom Quote' : 'Get Started'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )})}
          </div>

          {/* Setup Fee Notice */}
          <div
            ref={setupFee.ref}
            className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              setupFee.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-brand-green rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full" />
              <div className="absolute top-10 right-10 w-3 h-3 bg-brand-orange rounded-full" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="relative">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-7 h-7 text-brand-green" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">All plans include a one-time setup fee of $400</h4>
                  <p className="text-white/80">
                    This covers OE software setup, smart call routing configuration, custom AI integrations tailored to your business, and Google Calendar syncing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-20 bg-slate-50">
        <div
          ref={featuresSection.ref}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">What's Included</span>
              <div className="w-8 h-px bg-brand-orange" />
            </div>
            <h3 className={`text-3xl lg:text-4xl font-black text-slate-900 mb-4 transition-all duration-700 ${
              featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Everything Included
            </h3>
            <p className={`text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              All plans come packed with these powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const delay = index * 100
              return (
              <motion.div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-green transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay + 200}ms` }}
              >
                {/* Feature Icon */}
                <div className="mb-4">
                  <SimpleIcon Icon={feature.icon} color={feature.color} />
                </div>

                <h4 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>

                {/* Checkmark indicator */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-4 h-4 text-brand-green" />
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-white">
        <div
          ref={addonsSection.ref}
          className="max-w-6xl mx-auto px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Upgrade Options</span>
              <div className="w-8 h-px bg-brand-orange" />
            </div>
            <h3 className={`text-3xl lg:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Optional Add-Ons</h3>
            <p className={`text-slate-600 transition-all duration-700 delay-100 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Enhance your experience with these premium features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Website Chat Widget */}
            <div className={`bg-white border-2 border-blue-200 rounded-3xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Website Chat Widget AI</h4>
              <div className="mb-3">
                <span className="text-2xl font-bold text-brand-green">+$25</span>
                <span className="text-slate-600 text-sm">/mo</span>
              </div>
              <p className="text-slate-600 text-sm">AI-powered chat support directly embedded on your website</p>
            </div>

            {/* Website Redesign */}
            <div className={`bg-white border-2 border-orange-200 rounded-3xl p-6 hover:border-brand-orange hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-md mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Full Website Redesign</h4>
              <div className="mb-3">
                <span className="text-2xl font-bold text-brand-orange">$400</span>
                <span className="text-slate-600 text-sm"> one-time</span>
              </div>
              <p className="text-slate-600 text-sm">Professional website redesign tailored to your brand identity</p>
            </div>

            {/* Stripe Terminal */}
            <div className={`bg-white border-2 border-purple-200 rounded-3xl p-6 hover:border-purple-500 hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Stripe Terminal Sync</h4>
              <div className="mb-3">
                <span className="text-2xl font-bold text-purple-600">0.5%</span>
                <span className="text-slate-600 text-sm"> per transaction</span>
              </div>
              <p className="text-slate-600 text-sm">
                Accept in-person payments with{' '}
                <a
                  href="https://stripe.com/terminal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline font-semibold"
                >
                  Stripe Terminal
                </a>
                {' '}card readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
