import { motion } from 'framer-motion'
import { ClipboardList, CheckCircle, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const OnboardingPage = () => {
    return (
        <div className="min-h-screen bg-[#fafaf9]">
            <ScrollIndicator />
            
            {/* Hero Section */}
            <section className="relative py-20 bg-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-16 w-24 h-24 border-2 border-slate-100 rounded-full" />
                <div className="absolute top-28 right-24 w-4 h-4 bg-brand-green rounded-full" />
                <div className="absolute bottom-32 left-12 w-16 h-16 border border-dashed border-orange-200 rounded-full" />
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-brand-orange rounded-full" />

                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-px bg-brand-green" />
                            <span className="text-sm font-semibold text-brand-green uppercase tracking-wider">Business Setup</span>
                            <div className="w-8 h-px bg-brand-green" />
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                            <span className="text-brand-green">Onboarding</span> Questionnaire
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Help us understand your business better so we can provide the best service possible.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <NetlifyForm
                            formName="onboarding"
                            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/50"
                            successTitle="Thank you for completing the onboarding process!"
                            successMessage="We've received your information and will use it to set up your account."
                        >
                            {/* Form Header */}
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                                <div className="relative">
                                    <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                                        <ClipboardList className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Business Information</h3>
                                    <p className="text-slate-500 text-sm">Fill out each section below</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-1">
                                        Email <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">Your primary contact email</p>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                {/* Service Areas */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="service-areas" className="block text-sm font-bold text-slate-900 mb-1">
                                        Service Areas <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        List all cities, zip codes, or regions where you provide services
                                    </p>
                                    <Textarea
                                        id="service-areas"
                                        name="service-areas"
                                        placeholder="e.g., Minneapolis, St. Paul, surrounding suburbs..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                {/* FAQs */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="faqs" className="block text-sm font-bold text-slate-900 mb-1">
                                        Frequently Asked Questions (FAQs) <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        Common questions your customers ask and their answers
                                    </p>
                                    <Textarea
                                        id="faqs"
                                        name="faqs"
                                        placeholder="Q: Do you offer emergency services?&#10;A: Yes, we're available 24/7..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                {/* Pricing */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="pricing" className="block text-sm font-bold text-slate-900 mb-1">
                                        Pricing <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        Your pricing structure (hourly rates, service packages, emergency rates)
                                    </p>
                                    <Textarea
                                        id="pricing"
                                        name="pricing"
                                        placeholder="Standard rate: $X/hour&#10;Emergency: $X/hour..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                {/* Emergency Rules */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="emergency-rules" className="block text-sm font-bold text-slate-900 mb-1">
                                        Emergency Rules <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        What constitutes an emergency and how should they be prioritized
                                    </p>
                                    <Textarea
                                        id="emergency-rules"
                                        name="emergency-rules"
                                        placeholder="Emergencies: pipe burst, no heat in winter, gas leak..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                {/* Calendar Rules */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="calendar-rules" className="block text-sm font-bold text-slate-900 mb-1">
                                        Calendar Rules <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        Travel buffers, job durations, and scheduling preferences
                                    </p>
                                    <Textarea
                                        id="calendar-rules"
                                        name="calendar-rules"
                                        placeholder="30 min travel buffer, typical job 1-2 hours..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                {/* Hours */}
                                <div className="bg-slate-50 rounded-2xl p-6">
                                    <label htmlFor="hours" className="block text-sm font-bold text-slate-900 mb-1">
                                        Business Hours <span className="text-brand-orange">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">
                                        Regular hours and any special hours for emergencies or weekends
                                    </p>
                                    <Textarea
                                        id="hours"
                                        name="hours"
                                        placeholder="Mon-Fri: 8am-5pm&#10;Sat: 9am-3pm&#10;Sun: Closed..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Submit Onboarding Information
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </NetlifyForm>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default OnboardingPage
