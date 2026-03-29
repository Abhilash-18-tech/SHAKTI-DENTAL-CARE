const Privacy = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                
                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Last updated: October 2023</p>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mt-10">1. Information We Collect</h2>
                    <p>
                        Sakthi Dental Clinic respects your privacy. We collect personal information when you book an appointment or fill out our contact form, including your name, email address, phone number, and medical history relevant to your dental care.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10">2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Schedule and manage your appointments</li>
                        <li>Provide appropriate dental care and treatment</li>
                        <li>Communicate with you regarding our services</li>
                        <li>Maintain your medical records securely</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10">3. Data Security</h2>
                    <p>
                        We have implemented strict security measures to protect your personal and medical information. Your data is stored securely and is only accessible by authorized medical personnel.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@sakthidental.com or visit our clinic.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;