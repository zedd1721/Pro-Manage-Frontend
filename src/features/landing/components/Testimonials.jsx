import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Watson',
    position: 'VP of Engineering',
    company: 'TechForward',
    quote: 'ProManage replaced three separate tools for our team and significantly improved collaboration.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Marcus Johnson',
    position: 'Product Manager',
    company: 'ScaleUp Inc',
    quote: 'The real-time sync is game-changing. Our standups are shorter because everyone is already aligned.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Lisa Park',
    position: 'Design Director',
    company: 'Creative Labs',
    quote: 'Finally, a tool that designers, engineers, and product can all use without friction.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-text-secondary">
            See what industry leaders say about ProManage.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-white/80"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-text-primary leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.position}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
