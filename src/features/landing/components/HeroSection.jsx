import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Shield, Zap, Infinity } from "lucide-react";
import DashboardMockup from "@/features/landing/components/DashboardMockup";

const trustIndicators = [
  { icon: Infinity, label: "Unlimited Projects" },
  { icon: Zap, label: "Real-Time Collaboration" },
  { icon: Shield, label: "Enterprise Security" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                New: Video calling now available
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight"
            >
              Manage Projects,{' '}
              <span className="gradient-text">Collaborate in Real Time</span>, and
              Deliver Faster.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed"
            >
              ProManage brings task management, team collaboration, messaging,
              analytics, and video meetings together in one powerful workspace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-surface-light hover:bg-surface-lighter text-text-primary font-semibold rounded-lg border border-black/10 transition-all duration-200 hover:scale-105">
                <Play className="w-4 h-4" />
                Book Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-text-muted">
                  <item.icon className="w-4 h-4 text-accent" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
