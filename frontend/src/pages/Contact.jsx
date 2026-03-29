import { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });
        try {
            // Note: Update URL if backend runs on a different port/host
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus({ submitting: false, success: true, error: null });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact & Appointments</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto">We're here to help you achieve your best smile. Reach out to us today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Form Section */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                        
                        {status.success && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                                Thank you! Your message has been sent. We will contact you shortly.
                            </div>
                        )}
                        {status.error && (
                            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                                {status.error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50" placeholder="John Doe" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50" placeholder="+91 98765 43210" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message or Reason for Visit</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50" placeholder="How can we help you?"></textarea>
                            </div>
                            <button disabled={status.submitting} type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl disabled:opacity-70">
                                {status.submitting ? 'Sending Request...' : 'Request Appointment'}
                            </button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Clinic Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Location</h4>
                                        <p className="text-slate-500 mt-1">123 Medical Hub Road<br/>Beside Central Park<br/>Chennai, Tamil Nadu 600001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Contact Numbers</h4>
                                        <p className="text-slate-500 mt-1">+91 98765 43210<br/>+91 44 2345 6789 (Landline)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                                        <p className="text-slate-500 mt-1">appointments@sakthidental.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
                                <Clock className="text-primary" /> Clinic Timings
                            </h4>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex justify-between border-b border-slate-200 pb-2"><span>Mon - Fri:</span> <span className="font-medium text-slate-900">10:00 AM - 8:00 PM</span></li>
                                <li className="flex justify-between border-b border-slate-200 pb-2"><span>Saturday:</span> <span className="font-medium text-slate-900">10:00 AM - 5:00 PM</span></li>
                                <li className="flex justify-between text-secondary"><span>Sunday:</span> <span>Emergencies Only</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;