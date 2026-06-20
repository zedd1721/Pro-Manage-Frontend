import { motion } from 'framer-motion';
import { UserPlus, CheckSquare, PlayCircle, CheckCircle, BarChart3, FilePlus } from 'lucide-react';

const steps = [
  { icon: FilePlus, label: 'Manager Creates Task', color: 'bg-blue-500' },
  { icon: UserPlus, label: 'Assigns Team Member', color: 'bg-purple-500' },
  { icon: CheckSquare, label: 'Member Updates Checklist', color: 'bg-yellow-500' },
  { icon: PlayCircle, label: 'Task Auto-Moves to In Progress', color: 'bg-orange-500' },
  { icon: CheckCircle, label: 'Task Completed', color: 'bg-green-500' },
  { icon: BarChart3, label: 'Analytics Updated', color: 'bg-primary' },
];

export default function Workflow() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            How ProManage works
          </h2>
          <p className="text-lg text-text-secondary">
            A seamless workflow from task creation to completion.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`glass-card rounded-xl p-4 inline-flex items-center gap-3 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-white/80 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center shrink-0`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-text-primary">{step.label}</span>
                  </div>
                </div>

                <div className="hidden md:flex w-8 h-8 rounded-full bg-surface-light border border-primary/30 items-center justify-center shrink-0 z-10">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
