import { Plus } from "lucide-react";

function CreateProjectCard() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-50 text-sky-700">
          <Plus className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div>
          <h3 className="text-[18px] font-semibold tracking-tight text-slate-900">
            Create New Project
          </h3>
          <p className="text-[12.5px] text-slate-500">
            Start a smaller workspace with a clear purpose.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Project Name
          </label>
          <input
            type="text"
            placeholder="My Awesome Project"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-[14px] text-slate-800 placeholder-slate-300 transition-all focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Project Description
          </label>
          <textarea
            rows={6}
            placeholder="Briefly describe what this project is about..."
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-[14px] text-slate-800 placeholder-slate-300 transition-all focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-50"
          />
        </div>

        <button
          type="button"
          className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:from-sky-600 hover:to-cyan-600"
        >
          <Plus className="h-4 w-4" strokeWidth={2.2} />
          Create Project
        </button>
      </div>
    </section>
  );
}

export default CreateProjectCard;
