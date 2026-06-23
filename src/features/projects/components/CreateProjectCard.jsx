import { Plus } from "lucide-react";

function CreateProjectCard() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-1.5 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
          <Plus className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
        </div>
        <h3 className="text-[15px] font-bold text-gray-900">Create New Project</h3>
      </div>
      <p className="mb-5 ml-9 text-[11.5px] text-gray-400">
        Create a new workspace and invite your team later.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Project Name
          </label>
          <input
            type="text"
            placeholder="My Awesome Project"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-[13.5px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Project Description
          </label>
          <textarea
            rows={3}
            placeholder="Briefly describe what this project is about..."
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-[13.5px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
        </div>

        <button
          type="button"
          className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" strokeWidth={2.2} />
          Create Project
        </button>
      </div>
    </section>
  );
}

export default CreateProjectCard;
