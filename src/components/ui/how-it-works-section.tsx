import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Users, Calendar, BarChart3 } from 'lucide-react'

const HowItWorksSection = () => {
    const steps = [
        {
            number: 1,
            title: 'Connect your line',
            description: 'We provision a number or forward your existing line to the AI receptionist.',
            color: 'bg-brand-green',
            textColor: 'text-brand-green',
            time: '5 minutes',
            gradient: 'from-green-400 to-green-600',
            shadowColor: 'shadow-green-200'
        },
        {
            number: 2,
            title: 'Teach your services',
            description: 'We load pricing, service areas, and booking rules to guide conversations.',
            color: 'bg-brand-orange',
            textColor: 'text-brand-orange',
            time: '1-2 days',
            gradient: 'from-orange-400 to-orange-600',
            shadowColor: 'shadow-orange-200'
        },
        {
            number: 3,
            title: 'Book and track',
            description: 'Calls convert to appointments or qualified leads. You get confirmations and logs.',
            color: 'bg-purple-600',
            textColor: 'text-purple-600',
            time: 'Ongoing',
            gradient: 'from-purple-400 to-purple-600',
            shadowColor: 'shadow-purple-200'
        }
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="section max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-brand-green text-sm font-semibold border border-green-100 mb-6"
                    >
                        <Users className="w-4 h-4" />
                        Simple 3-step setup
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black mb-6 text-slate-900"
                    >
                        How it works
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Get up and running in days, not months. Our streamlined process makes AI integration effortless.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-green-200 via-orange-200 to-purple-200" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-full ${step.gradient} bg-gradient-to-br flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg ${step.shadowColor} relative z-10 group-hover:scale-110 transition-transform`}>
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {step.description}
                                </p>

                                <div className={`mt-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${step.textColor} bg-opacity-10 bg-slate-100`}>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    {step.time}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex justify-center gap-8 text-sm font-semibold text-slate-600"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-green" />
                        No long-term contracts
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-green" />
                        Cancel anytime
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorksSection
