import { ChevronDown, Mail, Send, UserPlus } from "lucide-react";

function AddMemberCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
          <UserPlus className="h-4 w-4 text-blue-600" strokeWidth={2} />
        </div>
        <h3 className="text-[15px] font-bold text-gray-900">Add Member</h3>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Member Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              placeholder="member@example.com"
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-[13.5px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Role
          </label>
          <div className="relative">
            <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-slate-50/70 px-4 py-2.5 pr-10 text-[13.5px] font-medium text-gray-800 transition-all hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50">
              <option value="pm">Project Manager</option>
              <option value="member">Team Member</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Designation
          </label>
          <div className="relative">
            <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-slate-50/70 px-4 py-2.5 pr-10 text-[13.5px] font-medium text-gray-800 transition-all hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-50">
              <option value="">Select designation</option>
              <option value="project-manager">Project Manager</option>
              <option value="team-lead">Team Lead</option>
              <option value="frontend-developer">Frontend Developer</option>
              <option value="backend-developer">Backend Developer</option>
              <option value="full-stack-developer">Full Stack Developer</option>
              <option value="mobile-developer">Mobile Developer</option>
              <option value="ui-ux-designer">UI/UX Designer</option>
              <option value="product-designer">Product Designer</option>
              <option value="qa-engineer">QA Engineer</option>
              <option value="qa-tester">QA Tester</option>
              <option value="devops-engineer">DevOps Engineer</option>
              <option value="data-analyst">Data Analyst</option>
              <option value="security-engineer">Security Engineer</option>
              <option value="business-analyst">Business Analyst</option>
              <option value="product-manager">Product Manager</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <button
          type="button"
          className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-sky-500 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:bg-sky-600"
        >
          <Send className="h-3.5 w-3.5" strokeWidth={2} />
          Send Invite
        </button>

        <p className="text-center text-[11.5px] text-gray-400">
          An invitation code will be sent to the member&apos;s email.
        </p>
      </div>
    </div>
  );
}

export default AddMemberCard;
