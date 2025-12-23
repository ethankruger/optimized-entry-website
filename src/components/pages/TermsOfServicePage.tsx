import React from 'react';

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>

                <h2 className="text-2xl font-bold text-slate-800 mb-4">Optimized Entry</h2>

                <p className="mb-8 text-slate-600">
                    Last updated: 12/12/2025
                </p>

                <div className="prose prose-slate">
                    <p className="text-slate-600 mb-8">
                        By using Optimized Entry, you agree to the following Terms of Service.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Services</h2>
                        <p className="text-slate-600">
                            Optimized Entry provides automated call handling, appointment booking, and operational notifications for service-based businesses. Services are provided on an as-is basis.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Account Responsibility</h2>
                        <p className="text-slate-600 mb-4">
                            You are responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600">
                            <li>Providing accurate contact information</li>
                            <li>Maintaining control of phone numbers connected to your account</li>
                            <li>Ensuring your customers are informed of how calls are handled</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">SMS Notifications</h2>
                        <p className="text-slate-600 mb-4">
                            By enrolling in Optimized Entry and providing a mobile phone number, you agree to receive account-related and appointment-related SMS notifications. These messages are not marketing messages.
                        </p>
                        <p className="text-slate-600">
                            You may opt out at any time by replying STOP. Opting out may limit certain service notifications.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Acceptable Use</h2>
                        <p className="text-slate-600 mb-4">
                            You agree not to use Optimized Entry for:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600">
                            <li>Illegal activities</li>
                            <li>Spam, unsolicited messaging, or deceptive practices</li>
                            <li>Violations of carrier, CTIA, or telecommunications regulations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Fees and Billing</h2>
                        <p className="text-slate-600">
                            Fees, setup costs, and service pricing are disclosed separately and may vary based on usage. Waived setup fees or promotional pricing may be limited-time offers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Limitation of Liability</h2>
                        <p className="text-slate-600 mb-4">
                            Optimized Entry is not responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600">
                            <li>Missed business opportunities</li>
                            <li>Service interruptions outside of our control</li>
                            <li>Errors caused by inaccurate information provided by the user</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Termination</h2>
                        <p className="text-slate-600">
                            We reserve the right to suspend or terminate service for violations of these Terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Changes</h2>
                        <p className="text-slate-600">
                            We may update these Terms from time to time. Continued use of the service constitutes acceptance of any changes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Contact</h2>
                        <p className="text-slate-600 mb-2">
                            Questions regarding these Terms may be directed to:
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

export default TermsOfServicePage;
