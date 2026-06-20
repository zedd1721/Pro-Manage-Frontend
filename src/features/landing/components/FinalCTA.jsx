import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Bring Your Team Together in{' '}
            <span className="gradient-text">One Workspace</span>.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Start managing projects, communicating with your team, and tracking
            productivity with ProManage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-surface-light hover:bg-surface-lighter text-text-primary font-semibold rounded-lg border border-black/10 transition-all duration-200 hover:scale-105">
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
