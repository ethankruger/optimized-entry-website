import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-[#fafaf9]">
            <ScrollIndicator />
            
            {/* Hero Section */}
            <section className="relative py-20 bg-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-16 w-20 h-20 border border-slate-100 rounded-full" />
                <div className="absolute top-24 right-20 w-3 h-3 bg-brand-orange rounded-full" />
                
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
                            <div className="relative w-14 h-14">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-300 scale-110" />
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-black text-slate-900">Terms of Service</h1>
                                <p className="text-slate-500 text-sm">Optimized Entry</p>
                            </div>
                        </div>
                        
                        <p className="text-slate-500 text-sm">
                            Last updated: 12/12/2025
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
                    >
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            By using Optimized Entry, you agree to the following Terms of Service.
                        </p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    Services
                                </h2>
                                <p className="text-slate-600">
                                    Optimized Entry provides automated call handling, appointment booking, and operational notifications for service-based businesses. Services are provided on an as-is basis.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Account Responsibility
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    You are responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Providing accurate contact information</li>
                                    <li>Maintaining control of phone numbers connected to your account</li>
                                    <li>Ensuring your customers are informed of how calls are handled</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    SMS Notifications
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    By enrolling in Optimized Entry and providing a mobile phone number, you agree to receive account-related and appointment-related SMS notifications. These messages are not marketing messages.
                                </p>
                                <p className="text-slate-600">
                                    You may opt out at any time by replying STOP. Opting out may limit certain service notifications.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Acceptable Use
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    You agree not to use Optimized Entry for:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Illegal activities</li>
                                    <li>Spam, unsolicited messaging, or deceptive practices</li>
                                    <li>Violations of carrier, CTIA, or telecommunications regulations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    Fees and Billing
                                </h2>
                                <p className="text-slate-600">
                                    Fees, setup costs, and service pricing are disclosed separately and may vary based on usage. Waived setup fees or promotional pricing may be limited-time offers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Limitation of Liability
                                </h2>
                                <p className="text-slate-600 mb-4">
                                    Optimized Entry is not responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-slate-600 space-y-1">
                                    <li>Missed business opportunities</li>
                                    <li>Service interruptions outside of our control</li>
                                    <li>Errors caused by inaccurate information provided by the user</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                    Termination
                                </h2>
                                <p className="text-slate-600">
                                    We reserve the right to suspend or terminate service for violations of these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                    Changes
                                </h2>
                                <p className="text-slate-600">
                                    We may update these Terms from time to time. Continued use of the service constitutes acceptance of any changes.
                                </p>
                            </section>

                            <section className="bg-slate-50 rounded-xl p-6">
                                <h2 className="text-lg font-bold text-slate-900 mb-4">Contact</h2>
                                <p className="text-slate-600 mb-4">
                                    Questions regarding these Terms may be directed to:
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

export default TermsOfServicePage
