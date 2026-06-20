import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle2, Clock, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Task Completion', value: 87, icon: CheckCircle2, color: 'text-accent', barColor: 'bg-accent' },
  { label: 'Team Productivity', value: 92, icon: TrendingUp, color: 'text-primary', barColor: 'bg-primary' },
  { label: 'Active Members', value: 24, icon: Users, color: 'text-blue-500', barColor: 'bg-blue-500' },
  { label: 'Pending Tasks', value: 12, icon: Clock, color: 'text-warning', barColor: 'bg-warning' },
  { label: 'Completed Tasks', value: 156, icon: BarChart3, color: 'text-purple-500', barColor: 'bg-purple-500' },
];

export default function Analytics() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Analytics that drive decisions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Track every metric that matters to keep your team performing at its best.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-6 bg-white/80"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{stat.label}</span>
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-text-primary"
                >
                  {stat.value}
                  {stat.label.includes('Rate') || stat.label.includes('Productivity') ? '%' : ''}
                </motion.span>
                <span className="text-xs text-text-muted">this week</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-surface-lighter overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-full rounded-full ${stat.barColor}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
