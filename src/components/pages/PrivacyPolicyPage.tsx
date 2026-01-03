import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#fafaf9]">
            <ScrollIndicator />
            
            {/* Hero Section */}
            <section className="relative py-20 bg-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-16 w-20 h-20 border border-slate-100 rounded-full" />
                <div className="absolute top-24 right-20 w-3 h-3 bg-brand-green rounded-full" />
                
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    {/* Back link */}
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        {/* Header with icon */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-black text-slate-900">Privacy Policy</h1>
                                <p className="text-slate-500 text-sm">Optimized Entry</p>
                            </div>
                        </div>
                        
                        <p className="text-slate-500 text-sm">
                            Last updated: 12/23/2025
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
                    >
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Optimized Entry ("we," "us," or "our") provides call-handling, appointment booking, and notification services for service-based businesses. This Privacy Policy explains how we collect, use, and protect information when you use our website and services.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    Information We Collect
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    We may collect the following information from business owners who use Optimized Entry:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Name and business name</li>
                                    <li>Phone number and email address</li>
                                    <li>Appointment and booking details</li>
                                    <li>Call and message metadata related to service usage</li>
                                </ul>
                                <p className="text-slate-600 mt-4 font-medium">
                                    We do not sell personal information to third parties.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    How We Use Information
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    Information is used solely to:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Provide call-handling and appointment booking services</li>
                                    <li>Send operational SMS notifications, such as appointment confirmations, reminders, booking updates, and priority alerts</li>
                                    <li>Communicate account-related information</li>
                                </ul>
                                <p className="text-slate-600 mt-4">
                                    Messages sent by Optimized Entry are informational only, not promotional.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    SMS Communications
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    By providing your phone number during onboarding, you consent to receive SMS messages related to your Optimized Entry account.
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Message frequency varies based on appointment activity.</li>
                                    <li>You may opt out at any time by replying STOP to any message.</li>
                                    <li>Message and data rates may apply.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Data Sharing
                                </h2>
                                <p className="text-slate-600">
                                    We may share information only with service providers necessary to operate our platform (such as telephony and messaging providers). These providers are contractually obligated to protect your data.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    Data Security
                                </h2>
                                <p className="text-slate-600">
                                    We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Your Choices
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    You may:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Request access to or deletion of your information</li>
                                    <li>Opt out of SMS notifications by replying STOP</li>
                                </ul>
                            </section>

                            <section className="bg-slate-50 rounded-xl p-6">
                                <h2 className="text-lg font-bold text-slate-900 mb-4">Contact</h2>
                                <p className="text-slate-600 mb-4">
                                    If you have questions about this Privacy Policy, contact us at:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-brand-green" />
                                        </div>
                                        <a href="mailto:optimizedentry@gmail.com" className="text-brand-green hover:underline">
                                            optimizedentry@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-brand-orange" />
                                        </div>
                                        <a href="tel:763-360-2412" className="text-slate-700 hover:text-brand-orange">
                                            763-360-2412
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage
