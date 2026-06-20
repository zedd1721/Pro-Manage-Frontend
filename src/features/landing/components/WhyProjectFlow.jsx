import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const rows = [
  { feature: 'Task Management', projectflow: true, traditional: true },
  { feature: 'Chat', projectflow: true, traditional: false },
  { feature: 'Video Calls', projectflow: true, traditional: false },
  { feature: 'Analytics', projectflow: true, traditional: false },
  { feature: 'Real-Time Sync', projectflow: true, traditional: false },
  { feature: 'Team Collaboration', projectflow: true, traditional: true },
];

export default function WhyProjectFlow() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Why choose ProManage?
          </h2>
          <p className="text-lg text-text-secondary">
            One platform replaces your entire stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm">
            <div className="px-6 py-4 text-text-muted font-medium border-b border-black/5">Feature</div>
            <div className="px-6 py-4 text-primary font-semibold text-center border-b border-black/5 bg-primary/5">ProManage</div>
            <div className="px-6 py-4 text-text-muted font-medium text-center border-b border-black/5">Traditional PM Tools</div>

            {rows.map((row, i) => (
              <div key={row.feature} className="contents">
                <div className={`px-6 py-4 text-text-secondary ${i < rows.length - 1 ? 'border-b border-black/5' : ''}`}>
                  {row.feature}
                </div>
                <div className={`px-6 py-4 flex justify-center ${i < rows.length - 1 ? 'border-b border-black/5' : ''} ${i % 2 === 0 ? 'bg-primary/[0.02]' : ''}`}>
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <div className={`px-6 py-4 flex justify-center ${i < rows.length - 1 ? 'border-b border-black/5' : ''} ${i % 2 === 0 ? 'bg-primary/[0.02]' : ''}`}>
                  {row.traditional ? (
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
