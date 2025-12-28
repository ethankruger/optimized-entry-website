import React from 'react'
import { Check, Phone, TrendingUp, Zap, Building2, Wrench, Calendar, Bot, Bell, MessageSquare, Users, LayoutDashboard } from "lucide-react"
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const PricingPage = () => {
  const header = useScrollAnimation()
  const cardsSection = useScrollAnimation()
  const setupFee = useScrollAnimation()
  const featuresSection = useScrollAnimation()
  const addonsSection = useScrollAnimation()

  const plans = [
    {
      name: "Starter",
      icon: <Wrench className="w-6 h-6" />,
      calls: "50",
      price: 89,
      overage: "$2.00",
      bestFor: "New businesses or low volume",
      color: "slate",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      borderColor: "border-slate-200",
      buttonBg: "bg-slate-700",
      buttonHover: "hover:bg-slate-800",
    },
    {
      name: "Growth",
      icon: <TrendingUp className="w-6 h-6" />,
      calls: "150",
      price: 220,
      overage: "$1.80",
      bestFor: "Small/medium home-service companies",
      color: "green",
      iconBg: "bg-green-100",
      iconColor: "text-brand-green",
      borderColor: "border-green-200",
      buttonBg: "bg-brand-green",
      buttonHover: "hover:bg-green-700",
    },
    {
      name: "Pro",
      icon: <Zap className="w-6 h-6" />,
      calls: "400",
      price: 510,
      overage: "$1.60",
      bestFor: "Busy teams that want full intake support",
      color: "orange",
      iconBg: "bg-orange-100",
      iconColor: "text-brand-orange",
      borderColor: "border-orange-200",
      buttonBg: "bg-brand-orange",
      buttonHover: "hover:bg-orange-700",
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-6 h-6" />,
      calls: "Custom",
      price: "Custom",
      overage: "Volume-discounted",
      bestFor: "Multi-tech teams & franchises",
      color: "purple",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-200",
      buttonBg: "bg-purple-700",
      buttonHover: "hover:bg-purple-800",
      isCustom: true,
    },
  ]

  const features = [
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI Call Answering",
      description: "Smart AI handles every call professionally",
      color: "#30b357"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Instant Booking and Google Calendar Sync",
      description: "Customers book appointments 24/7 with seamless integration",
      color: "#30b357"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Call Summaries",
      description: "Full call summaries with notes and recordings",
      color: "#30b357"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Smart Routing",
      description: "Calls routed to the right person, every time",
      color: "#30b357"
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Instant Emergency Alerts",
      description: "Urgent calls flagged and logged immediately",
      color: "#30b357"
    },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Access to Optimized Entry Portal",
      description: "Full access to dashboard, analytics, invoice sending, and more",
      color: "#30b357"
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Phone className="w-4 h-4 text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">Simple Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Never miss a customer call again. Choose the plan that fits your business.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Designed for contractors, plumbers, handymen, etc.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsSection.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {plans.map((plan, index) => {
            const delay = index * 100
            return (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                cardsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="p-6 flex flex-col flex-grow">
                {/* Icon */}
                <div className={`w-14 h-14 ${plan.iconBg} rounded-xl flex items-center justify-center mb-4 ${plan.iconColor}`}>
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>

                {/* Call Limit - PROMINENT */}
                <div className={`mb-4 p-4 ${plan.iconBg} rounded-xl border-2 ${plan.borderColor}`}>
                  <div className="text-sm text-slate-600 font-semibold mb-1">Included Calls</div>
                  {plan.isCustom ? (
                    <div>
                      <div className={`text-5xl font-black ${plan.iconColor}`}>Custom</div>
                      <div className="text-xs text-slate-500 mt-1"> (500+  calls per month)</div>
                    </div>
                  ) : (
                    <div className={`text-5xl font-black ${plan.iconColor}`}>
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
                <div className="mb-6 p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs text-slate-500 font-semibold mb-1">BEST FOR</div>
                  <div className="text-sm text-slate-700">{plan.bestFor}</div>
                </div>

                {/* CTA Button - pushed to bottom with mt-auto */}
                <Link
                  to="/contact"
                  className={`block w-full py-3 px-6 rounded-xl text-center font-bold transition-all text-white mt-auto ${plan.buttonBg} ${plan.buttonHover} hover:shadow-lg hover:-translate-y-0.5`}
                >
                  {plan.isCustom ? 'Get Custom Quote' : 'Get Started'}
                </Link>
              </div>
            </div>
          )})}
        </div>

        {/* Setup Fee Notice */}
        <div
          ref={setupFee.ref}
          className={`max-w-3xl mx-auto mb-16 p-6 bg-green-50 border-2 border-green-200 rounded-2xl transition-all duration-700 ${
            setupFee.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">All plans include a one-time setup fee of $400</h4>
              <p className="text-slate-700">
                This covers OE software setup, smart call routing configuration, custom AI integrations tailored to your business, and Google Calendar syncing.
              </p>
            </div>
          </div>
        </div>

        {/* Features Included */}
        <div
          ref={featuresSection.ref}
          className="max-w-6xl mx-auto mb-20 relative"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-orange-50/50 rounded-3xl -z-10" />

          <div className="text-center mb-12 pt-12">
            <h3 className={`text-4xl md:text-5xl font-extrabold text-center mb-4 text-slate-900 transition-all duration-700 ${
              featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Everything Included
            </h3>
            <p className={`text-center text-slate-600 mb-12 text-xl max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              All plans come packed with these powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-12">
            {features.map((feature, index) => {
              const delay = index * 100
              return (
              <div
                key={index}
                className={`group relative flex flex-col items-start gap-4 p-7 bg-white rounded-2xl border-2 border-slate-200 hover:border-brand-green transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                  featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay + 200}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/50 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                <div className="relative flex items-center gap-4 w-full">
                  <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 10px 15px -3px rgba(48, 179, 87, 0.3), 0 4px 6px -4px rgba(48, 179, 87, 0.3)' }}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-slate-900 mb-0.5">{feature.title}</h4>
                  </div>
                </div>
                <div className="relative">
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Checkmark indicator */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-4 h-4 text-brand-green" />
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Add-Ons Section - Visual Separator */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-60" />
        </div>

        {/* Add-Ons Section */}
        <div
          ref={addonsSection.ref}
          className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-200 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">UPGRADE OPTIONS</span>
            </div>
            <h3 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-2 transition-all duration-700 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Optional Add-Ons</h3>
            <p className={`text-base text-slate-600 transition-all duration-700 delay-100 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Enhance your experience with these premium features</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className={`bg-white border-2 border-blue-200 rounded-2xl p-5 hover:border-blue-500 hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <div className={`bg-white border-2 border-orange-200 rounded-2xl p-5 hover:border-brand-orange hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <div className={`bg-white border-2 border-purple-200 rounded-2xl p-5 hover:border-purple-500 hover:shadow-xl transition-all duration-500 ${
              addonsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {' '}card readers. Automatically sync appointments to invoices and process payments on-site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
