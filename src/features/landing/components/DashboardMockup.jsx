import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MessageSquare, MoreHorizontal, Plus, Search, Users } from 'lucide-react';

const columns = [
  { title: 'Backlog', count: 3, color: 'bg-gray-400' },
  { title: 'To Do', count: 2, color: 'bg-blue-500' },
  { title: 'In Progress', count: 2, color: 'bg-yellow-500' },
  { title: 'Done', count: 1, color: 'bg-green-500' },
];

const tasks = [
  { id: 1, title: 'Design system update', tag: 'Design', assignees: 2, comments: 4, column: 0 },
  { id: 2, title: 'API integration', tag: 'Backend', assignees: 1, comments: 2, column: 0 },
  { id: 3, title: 'User research', tag: 'Research', assignees: 3, comments: 7, column: 0 },
  { id: 4, title: 'Landing page', tag: 'Frontend', assignees: 2, comments: 3, column: 1 },
  { id: 5, title: 'Auth flow', tag: 'Backend', assignees: 1, comments: 1, column: 1 },
  { id: 6, title: 'Dashboard UI', tag: 'Frontend', assignees: 2, comments: 5, column: 2 },
  { id: 7, title: 'Analytics setup', tag: 'Data', assignees: 1, comments: 2, column: 2 },
  { id: 8, title: 'Onboarding flow', tag: 'Product', assignees: 2, comments: 8, column: 3 },
];

const tagColors = {
  Design: 'bg-purple-100 text-purple-700',
  Backend: 'bg-blue-100 text-blue-700',
  Research: 'bg-pink-100 text-pink-700',
  Frontend: 'bg-cyan-100 text-cyan-700',
  Data: 'bg-orange-100 text-orange-700',
  Product: 'bg-green-100 text-green-700',
};

export default function DashboardMockup() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card rounded-2xl p-4 shadow-2xl shadow-black/10 bg-white/80"
      >
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-text-muted font-medium">ProManage - Q1 Roadmap</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white"
                  style={{ opacity: 0.7 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-light border border-black/5">
            <Search className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-xs text-text-muted">Search tasks...</span>
          </div>
          <button className="p-1.5 rounded-lg bg-surface-light border border-black/5 hover:bg-surface-lighter transition-colors">
            <Plus className="w-3.5 h-3.5 text-text-muted" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {columns.map((col, colIdx) => (
            <div key={col.title} className="min-w-[140px] flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
                <span className="text-xs font-medium text-text-secondary">{col.title}</span>
                <span className="text-xs text-text-muted ml-auto">{col.count}</span>
              </div>
              <div className="space-y-2">
                {tasks
                  .filter((t) => t.column === colIdx)
                  .map((task) => (
                    <motion.div
                      key={task.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-2.5 rounded-xl bg-white border border-black/5 hover:border-primary/30 transition-all cursor-pointer group shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-1.5">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${tagColors[task.tag]}`}>
                          {task.tag}
                        </span>
                        <MoreHorizontal className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-text-primary font-medium mb-2 leading-snug">{task.title}</p>
                      <div className="flex items-center gap-2 text-text-muted">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span className="text-[10px]">{task.assignees}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          <span className="text-[10px]">{task.comments}</span>
                        </div>
                        {task.column === 3 && (
                          <CheckCircle2 className="w-3 h-3 text-accent ml-auto" />
                        )}
                        {task.column === 2 && (
                          <Clock className="w-3 h-3 text-warning ml-auto" />
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -right-4 glass-card rounded-xl p-3 shadow-xl bg-white/90"
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-white" />
          </div>
          <div>
            <p className="text-xs font-medium text-text-primary">Sarah updated</p>
            <p className="text-[10px] text-text-muted">Dashboard UI - In Progress</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-3 -left-3 glass-card rounded-xl p-2.5 shadow-xl bg-white/90"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-text-primary">12 tasks done</p>
            <p className="text-[9px] text-text-muted">This week</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
