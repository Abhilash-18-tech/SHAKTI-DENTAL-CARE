import { motion } from 'framer-motion';

const TreatmentCard = ({ icon: Icon, image, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
    >
      {image ? (
        <div className="h-48 w-full overflow-hidden bg-slate-50">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="p-8 pb-0">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="w-7 h-7 text-primary group-hover:text-white" />
          </div>
        </div>
      )}
      <div className={`p-8 flex-grow flex flex-col ${image ? 'pt-6' : 'translate-y-0'}`}>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-500 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-6">
          <button className="text-primary font-medium hover:text-blue-700 hover:underline text-sm uppercase tracking-wide inline-flex items-center gap-1">
             Learn Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TreatmentCard;