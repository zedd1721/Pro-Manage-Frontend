import { motion } from 'framer-motion';
import { Send, CheckCircle2, Clock, MessageSquare, Bell } from 'lucide-react';

const chatMessages = [
  { name: 'Alex', text: 'Just updated the design system colors', time: '2m ago', self: false },
  { name: 'You', text: 'Looks great! Moving to In Progress', time: '1m ago', self: true },
  { name: 'Sarah', text: 'Dashboard analytics are ready for review', time: 'Now', self: false },
];

const boardTasks = [
  { title: 'Design system update', status: 'In Progress', progress: 75 },
  { title: 'Dashboard analytics', status: 'Done', progress: 100 },
  { title: 'API integration', status: 'To Do', progress: 0 },
];

export default function Collaboration() {
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
            Real-time collaboration
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See changes instantly as your team works together in one workspace.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 bg-white/80"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text-primary">Team Chat</span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              <Bell className="w-4 h-4 text-text-muted" />
            </div>
            <div className="space-y-3">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`flex gap-3 ${msg.self ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${msg.self ? 'bg-primary text-white' : 'bg-surface-light text-text-secondary'}`}>
                    {msg.name[0]}
                  </div>
                  <div className={`max-w-[75%] ${msg.self ? 'text-right' : ''}`}>
                    <div className={`inline-block px-3 py-2 rounded-xl text-xs ${msg.self ? 'bg-primary text-white' : 'bg-surface-light text-text-primary'}`}>
                      {msg.text}
                    </div>
                    <p className="text-[10px] text-text-muted mt-1">{msg.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-light border border-black/5">
              <span className="text-xs text-text-muted flex-1">Type a message...</span>
              <Send className="w-3.5 h-3.5 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 bg-white/80"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-text-primary">Live Board</span>
              </div>
              <span className="text-xs text-text-muted">3 members active</span>
            </div>
            <div className="space-y-3">
              {boardTasks.map((task, i) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-3 rounded-xl bg-surface-light border border-black/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-text-primary">{task.title}</span>
                    {task.status === 'Done' ? (
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    ) : (
                      <Clock className="w-4 h-4 text-warning" />
                    )}
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-lighter overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${task.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full rounded-full ${task.progress === 100 ? 'bg-accent' : 'bg-primary'}`}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-text-muted">{task.progress}%</span>
                    <span className="text-[10px] text-text-muted">{task.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
