import { motion } from 'framer-motion';
import { UserPlus, Shield, Users, Key, ArrowRightLeft } from 'lucide-react';

const cards = [
  { icon: UserPlus, title: 'Member Invitations', desc: 'Invite teammates via email or shareable links', color: 'bg-blue-500' },
  { icon: Key, title: 'Invitation Codes', desc: 'Generate secure codes for quick onboarding', color: 'bg-purple-500' },
  { icon: Shield, title: 'Team Permissions', desc: 'Granular access control for every project', color: 'bg-green-500' },
  { icon: Users, title: 'Role Management', desc: 'Admin, Editor, Viewer roles with clear boundaries', color: 'bg-orange-500' },
  { icon: ArrowRightLeft, title: 'Project Switching', desc: 'Move between projects with a single click', color: 'bg-primary' },
];

export default function TeamManagement() {
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
            Built for teams of any size
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Onboard, manage, and organize your team with enterprise-grade controls.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-white/80"
            >
              <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-1">{card.title}</h3>
              <p className="text-sm text-text-secondary">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
