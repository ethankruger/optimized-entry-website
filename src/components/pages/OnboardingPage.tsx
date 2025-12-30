import { motion } from 'framer-motion'
import { ClipboardList } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { NetlifyForm } from '@/components/ui/netlify-form'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

const OnboardingPage = () => {
    return (
        <div className="min-h-screen py-20 bg-hero">
            <ScrollIndicator />
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4"
                        >
                            <ClipboardList className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-700">Business Setup</span>
                        </motion.div>
                        <h1 className="title-xl mb-4">
                            <span className="text-gradient-brand">Onboarding</span> Questionnaire
                        </h1>
                        <p className="text-lg text-slate-600">
                            Help us understand your business better so we can provide the best service possible.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <NetlifyForm
                            formName="onboarding"
                            className="card space-y-6"
                            successTitle="Thank you for completing the onboarding process!"
                            successMessage="We've received your information and will use it to set up your account."
                        >
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            {/* Service Areas */}
                            <div>
                                <label htmlFor="service-areas" className="block text-sm font-semibold mb-2">
                                    Service Areas <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="service-areas"
                                    name="service-areas"
                                    placeholder="List the geographic areas you serve (e.g., Minneapolis, St. Paul, surrounding suburbs...)"
                                    rows={4}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Please list all cities, zip codes, or regions where you provide services.
                                </p>
                            </div>

                            {/* FAQs */}
                            <div>
                                <label htmlFor="faqs" className="block text-sm font-semibold mb-2">
                                    Frequently Asked Questions (FAQs) <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="faqs"
                                    name="faqs"
                                    placeholder="List common questions your customers ask and their answers..."
                                    rows={6}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Include questions about your services, policies, or anything customers commonly ask.
                                </p>
                            </div>

                            {/* Pricing */}
                            <div>
                                <label htmlFor="pricing" className="block text-sm font-semibold mb-2">
                                    Pricing <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="pricing"
                                    name="pricing"
                                    placeholder="Describe your pricing structure (e.g., hourly rates, service packages, emergency rates...)"
                                    rows={5}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Include standard rates, emergency rates, and any special pricing information.
                                </p>
                            </div>

                            {/* Emergency Rules */}
                            <div>
                                <label htmlFor="emergency-rules" className="block text-sm font-semibold mb-2">
                                    Emergency Rules <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="emergency-rules"
                                    name="emergency-rules"
                                    placeholder="Define what constitutes an emergency (e.g., pipe burst, no heat in winter, gas leak...)"
                                    rows={5}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Specify emergency scenarios and how they should be prioritized or handled.
                                </p>
                            </div>

                            {/* Calendar Rules */}
                            <div>
                                <label htmlFor="calendar-rules" className="block text-sm font-semibold mb-2">
                                    Calendar Rules <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="calendar-rules"
                                    name="calendar-rules"
                                    placeholder="Specify travel buffers, job durations, and scheduling preferences..."
                                    rows={5}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Include: time needed between jobs, typical job durations, travel time requirements, etc.
                                </p>
                            </div>

                            {/* Hours */}
                            <div>
                                <label htmlFor="hours" className="block text-sm font-semibold mb-2">
                                    Business Hours <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="hours"
                                    name="hours"
                                    placeholder="List your operating hours (e.g., Mon-Fri: 8am-5pm, Sat: 9am-3pm, Sun: Closed...)"
                                    rows={4}
                                    required
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Include regular hours and any special hours for emergencies or weekends.
                                </p>
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Submit Onboarding Information
                            </Button>
                        </NetlifyForm>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default OnboardingPage
