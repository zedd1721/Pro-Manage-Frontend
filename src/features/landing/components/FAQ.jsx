import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does ProManage work?',
    answer: 'ProManage combines project management, team chat, video meetings, and analytics into one unified workspace. Create tasks, assign them to teammates, track progress in real time, and communicate without switching between apps.',
  },
  {
    question: 'Can I invite team members?',
    answer: 'Yes, you can invite unlimited team members via email or shareable invitation links. Each member can be assigned specific roles and permissions to control what they can access and modify.',
  },
  {
    question: 'Is video calling included?',
    answer: 'Video calling is included in all plans. You can start one-on-one or group meetings directly from any project or task without leaving the workspace.',
  },
  {
    question: 'Can I manage multiple projects?',
    answer: 'Absolutely. You can create and manage unlimited projects. Switch between projects instantly from the sidebar.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes, our Starter plan is free forever for individuals and small teams. It includes basic Kanban boards, task management, and team collaboration features.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about ProManage.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden bg-white/80"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-text-primary pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-text-muted shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
