const About = () => {
    return (
      <div className="py-20 bg-[#f5f4f8] min-h-screen font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Dr. Anupriya Biography (Moved to Top) */}
            <div className="flex flex-col lg:flex-row items-start gap-16 mb-24 max-w-6xl mx-auto">
                <div className="w-full lg:w-2/5">
                    <div className="bg-slate-200 rounded-[30px] aspect-[4/5] w-full overflow-hidden shadow-xl relative group">
                        <img 
                            src="/ai_lady_doctor.png" 
                            alt="Dr. Anupriya" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </div>
                <div className="w-full lg:w-3/5 pt-4">
                    <h2 className="text-4xl font-extrabold text-[#1a1b3a] sm:text-5xl font-serif mb-3">
                        Get to Know <span className="bg-gradient-to-r from-[#4d4add] via-[#9255c2] to-[#d66f9f] bg-clip-text text-transparent">Dr. Anupriya</span>
                    </h2>
                    <p className="text-[#4d4add] font-semibold mb-8">Your Trusted Partner in Dental Care</p>
                    
                    <div className="space-y-6 text-slate-500 leading-relaxed text-[15px]">
                        <p>
                            Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
                        </p>
                        <p>
                            In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
                        </p>
                        <p>
                            At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. Because here, your smile isn't just treated — it's celebrated.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-xl text-[#4d4add]">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1b3a] mb-4 font-serif">Our Mission</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                        To redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-xl text-[#d66f9f]">👁️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1b3a] mb-4 font-serif">Our Vision</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                        To be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. We believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to deliver exceptional dental outcomes and contribute positively to the community through awareness initiatives and outreach programs.
                    </p>
                </div>
            </div>

            {/* Our Team of Doctors */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-[#1a1b3a] sm:text-5xl font-serif mb-4">
                    Our Team of <span className="bg-gradient-to-r from-[#4d4add] via-[#9255c2] to-[#d66f9f] bg-clip-text text-transparent">Doctors</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                {[
                    { name: "Dr. Ananya Iyer", spec: "Prosthodontist" },
                    { name: "Dr. Meera Subramanian", spec: "Endodontist" },
                    { name: "Dr. Arvind Kumar", spec: "Dental Surgeon" },
                    { name: "Dr. Sneha N", spec: "Orthodontist" },
                    { name: "Dr. Srinivas Rohit Ramanujam", spec: "Implantologist" },
                    { name: "Dr. Balu", spec: "Laser Surgeon" },
                    { name: "Dr. Vikram Raj Kishore", spec: "Aligners Partner" },
                    { name: "Dr. Ajay Kumar", spec: "Oral & Maxillofacial Surgeon" }
                ].map((doc, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-indigo-50 text-[#4d4add] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold font-serif">
                            {doc.name.replace('Dr. ', '').charAt(0)}
                        </div>
                        <h3 className="text-lg font-bold text-[#1a1b3a] font-serif mb-1">{doc.name}</h3>
                        <p className="text-sm text-slate-500">{doc.spec}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default About;