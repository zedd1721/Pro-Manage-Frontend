import { motion } from 'framer-motion';
import { Layout, ClipboardList, RefreshCw, MessageSquare, Video, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Kanban Project Management',
    description: 'Manage projects through Backlog, To Do, In Progress, and Done workflows.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ClipboardList,
    title: 'Smart Task Assignment',
    description: 'Assign tasks to team members with deadlines and progress tracking.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Collaboration',
    description: 'Instant updates across the platform whenever tasks or checklists change.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Built-In Team Chat',
    description: 'Project channels and direct messaging without leaving the workspace.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Video,
    title: 'Video Meetings',
    description: 'Start one-to-one or group video calls directly inside your project.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track productivity, task completion rates, workload distribution, and team performance.',
    color: 'from-primary to-accent',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features that replace multiple tools and keep everyone in sync.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer bg-white/80"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
