const About = () => {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">About Sakthi Dental Clinic</h1>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto">Committed to creating beautiful, healthy smiles for your entire family.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                <div className="bg-slate-100 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                    <span className="text-slate-400 text-xl">[Dr. Anupriya's Photo]</span>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                        <h3 className="text-2xl font-bold">Dr. Anupriya</h3>
                        <p className="text-blue-200">Chief Dental Surgeon, BDS, MDS</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your Doctor</h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        With over 15 years of clinical experience, Dr. Anupriya specializes in advanced cosmetic and restorative dentistry. Her gentle approach and unwavering commitment to patient comfort have made her a trusted name in dental care.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        She believes in treating the patient, not just the tooth, ensuring that every visit is as comfortable and stress-free as possible, especially for children and anxious patients.
                    </p>
                    <ul className="space-y-3 font-medium text-slate-700">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Member of Indian Dental Association</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Certified in Modern Endodontics</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> specialized in Pediatric Care</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 rounded-3xl p-12 text-center">
                <blockquote className="text-2xl italic text-slate-700 max-w-4xl mx-auto leading-relaxed">
                    "Our mission is to provide exceptional, affordable, and compassionate dental care. We envision a community where a healthy smile is accessible to everyone."
                </blockquote>
            </div>
        </div>
      </div>
    );
  };
  
  export default About;