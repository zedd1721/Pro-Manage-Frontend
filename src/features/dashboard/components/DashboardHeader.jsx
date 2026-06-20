function DashboardHeader({ formattedDate, totalCards, doneCards }) {
  return (
    <header className="border-b border-gray-100 bg-white py-4">
      <div className="flex w-full items-center justify-between gap-4 px-6 xl:px-8">
        <div>
          <h1 className="text-[18px] font-bold tracking-tight text-gray-900">
            Welcome back, Kumar
          </h1>
          <p className="mt-0.5 text-[12px] text-gray-400">
            You have{" "}
            <span className="font-semibold text-gray-600">
              {totalCards - doneCards} tasks
            </span>{" "}
            in progress
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 lg:flex">
            {[
              { label: "Total", val: totalCards, color: "text-gray-700" },
              { label: "Done", val: doneCards, color: "text-emerald-600" },
              { label: "Overdue", val: 2, color: "text-red-500" },
            ].map(({ label, val, color }) => (
              <div
                key={label}
                className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-center"
              >
                <div className={`text-[15px] font-bold ${color}`}>{val}</div>
                <div className="text-[10px] font-medium text-gray-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200" />

          <div className="text-right">
            <span className="text-[13px] font-semibold text-gray-700">
              {formattedDate}
            </span>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-[11px] font-bold text-white shadow-sm">
            KR
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
