import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Settings, Rocket, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const HowItWorksSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const steps = [
        {
            number: '01',
            icon: Phone,
            title: 'Connect',
            subtitle: 'your phone line',
            description: 'We provide a dedicated number that forwards to your AI receptionist.',
            color: 'green',
        },
        {
            number: '02',
            icon: Settings,
            title: 'Configure',
            subtitle: 'your business rules',
            description: 'We load your services, pricing, and booking preferences. The AI learns your business. 1-2 business days.',
            color: 'orange',
        },
        {
            number: '03',
            icon: Rocket,
            title: 'Launch',
            subtitle: 'and start booking',
            description: 'Calls convert to appointments automatically. You get real-time notifications and full logs.',
            color: 'purple',
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-[#fafaf9] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="max-w-2xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-px bg-brand-green" />
                        <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">How it works</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-6"
                    >
                        Up and running
                        <br />
                        in days, not months.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600"
                    >
                        A simple three-step process designed for busy business owners.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15 }}
                            className="relative group"
                        >
                            {/* Connecting line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-px">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-slate-200 to-slate-100"
                                        initial={{ scaleX: 0 }}
                                        animate={isInView ? { scaleX: 1 } : {}}
                                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                        style={{ transformOrigin: 'left' }}
                                    />
                                </div>
                            )}

                            {/* Card */}
                            <div className="relative bg-white rounded-2xl p-8 border border-slate-100 h-full hover:shadow-xl hover:shadow-slate-100/80 hover:border-slate-200 transition-all duration-300">
                                {/* Large faded number */}
                                <span className="absolute top-4 right-6 text-6xl font-black text-slate-100 select-none">
                                    {step.number}
                                </span>

                                {/* Icon */}
                                <div className="relative z-10 mb-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                                        step.color === 'green' 
                                            ? 'bg-brand-green shadow-green-200' 
                                            : step.color === 'orange'
                                            ? 'bg-brand-orange shadow-orange-200'
                                            : 'bg-purple-500 shadow-purple-200'
                                    }`}>
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-slate-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className={`text-lg font-medium mb-4 ${
                                        step.color === 'green' ? 'text-brand-green' : 
                                        step.color === 'orange' ? 'text-brand-orange' : 
                                        'text-purple-600'
                                    }`}>
                                        {step.subtitle}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-20 pt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <p className="text-slate-600">
                        <span className="font-semibold text-slate-900">No technical skills required.</span>
                        {' '}We handle the setup for you.
                    </p>
                    <Button asChild variant="dark" className="group">
                        <Link to="/get-a-demo">
                            Schedule a demo
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorksSection
