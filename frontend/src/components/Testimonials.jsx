import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Priya M.",
            text: "The best dental experience I've had. Dr. Anupriya is incredibly gentle and the clinic is so calming.",
            rating: 5
        },
        {
            name: "Sarah K.",
            text: "Took my kids here and they actually enjoyed it! The staff is fantastic with children.",
            rating: 5
        },
        {
            name: "Rajesh V.",
            text: "Professional, clean, and highly advanced. Explained the procedures clearly before starting.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">What Our Patients Say</h2>
                    <p className="text-lg text-slate-500">Real stories from our happy family of patients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(review.rating)].map((_, index) => (
                                    <Star key={index} fill="currentColor" size={20} />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                            <div className="font-bold text-slate-900">{review.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;