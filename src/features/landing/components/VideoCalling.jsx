import { motion } from 'framer-motion';
import { Video, Monitor, Mic, PhoneOff } from 'lucide-react';

const participants = [
  { name: 'Sarah Chen', role: 'Product Lead', color: 'from-blue-500 to-cyan-500' },
  { name: 'Alex Rivera', role: 'Engineer', color: 'from-purple-500 to-pink-500' },
  { name: 'You', role: 'Host', color: 'from-primary to-accent' },
  { name: 'Jordan Smith', role: 'Designer', color: 'from-orange-500 to-yellow-500' },
];

export default function VideoCalling() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Video calls, built in
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Start meetings directly from any task or project without switching apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 max-w-4xl mx-auto bg-white/80"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-text-primary">Q1 Roadmap Review</p>
                <p className="text-xs text-text-muted">Started 12 min ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-500 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                LIVE
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {participants.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative aspect-video rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-1">
                    <span className="text-lg font-bold text-white">{p.name[0]}</span>
                  </div>
                  <p className="text-xs font-medium text-white">{p.name}</p>
                  <p className="text-[10px] text-white/70">{p.role}</p>
                </div>
                {p.name === 'You' && (
                  <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Mic className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
              <Mic className="w-4 h-4 text-text-secondary" />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
              <Video className="w-4 h-4 text-text-secondary" />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
              <Monitor className="w-4 h-4 text-text-secondary" />
            </button>
            <button className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 transition-colors">
              <PhoneOff className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
