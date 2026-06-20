import { motion } from 'framer-motion';

const companies = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Spotify', logo: 'S' },
  { name: 'Netflix', logo: 'N' },
  { name: 'Airbnb', logo: 'A' },
  { name: 'Uber', logo: 'U' },
  { name: 'Stripe', logo: 'St' },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted mb-8"
        >
          Trusted by modern teams worldwide
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-surface-light border border-black/10 flex items-center justify-center text-sm font-bold text-text-secondary">
                  {company.logo}
                </div>
                <span className="text-lg font-semibold text-text-secondary">{company.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
