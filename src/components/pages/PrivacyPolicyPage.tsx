import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>

                <h2 className="text-2xl font-bold text-slate-800 mb-4">Optimized Entry</h2>

                <p className="mb-8 text-slate-600">
                    Last updated: 12/23/2025
                </p>

                <div className="prose prose-slate">
                    <p className="text-slate-600 mb-8">
                        Optimized Entry ("we," "us," or "our") provides call-handling, appointment booking, and notification services for service-based businesses. This Privacy Policy explains how we collect, use, and protect information when you use our website and services.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            We may collect the following information from business owners who use Optimized Entry:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-4">
                            <li>Name and business name</li>
                            <li>Phone number and email address</li>
                            <li>Appointment and booking details</li>
                            <li>Call and message metadata related to service usage</li>
                        </ul>
                        <p className="text-slate-600">
                            We do not sell personal information to third parties.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">How We Use Information</h2>
                        <p className="text-slate-600 mb-4">
                            Information is used solely to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-4">
                            <li>Provide call-handling and appointment booking services</li>
                            <li>Send operational SMS notifications, such as appointment confirmations, reminders, booking updates, and priority alerts</li>
                            <li>Communicate account-related information</li>
                        </ul>
                        <p className="text-slate-600">
                            Messages sent by Optimized Entry are informational only, not promotional.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">SMS Communications</h2>
                        <p className="text-slate-600 mb-4">
                            By providing your phone number during onboarding, you consent to receive SMS messages related to your Optimized Entry account.
                        </p>
                        <ul className="list-disc pl-6 text-slate-600">
                            <li>Message frequency varies based on appointment activity.</li>
                            <li>You may opt out at any time by replying STOP to any message.</li>
                            <li>Message and data rates may apply.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Data Sharing</h2>
                        <p className="text-slate-600">
                            We may share information only with service providers necessary to operate our platform (such as telephony and messaging providers). These providers are contractually obligated to protect your data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Data Security</h2>
                        <p className="text-slate-600">
                            We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Your Choices</h2>
                        <p className="text-slate-600 mb-4">
                            You may:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600">
                            <li>Request access to or deletion of your information</li>
                            <li>Opt out of SMS notifications by replying STOP</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Contact</h2>
                        <p className="text-slate-600 mb-2">
                            If you have questions about this Privacy Policy, contact us at:
                        </p>
                        <p className="text-slate-600 ml-4">
                            Email: optimizedentry@gmail.com<br />
                            Phone: 763-360-2412
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
