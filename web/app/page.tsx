import { risks } from '../data/risks';
import { vendors } from '../data/vendors';
import { exceptions } from '../data/exceptions';

const severityColor: Record<string, string> = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  High: 'bg-red-100 text-red-800',
};

export default function Home() {
  const highOrMediumRisks = risks.filter(r => r.severity !== 'Low');
  const highRiskVendors = vendors.filter(v => v.residualRisk === 'High');
  const openExceptions = exceptions.filter(e => !e.status.toLowerCase().includes('closed'));

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">SkyShield Airlines – Cyber Risk Dashboard</h1>
            <p className="text-sm text-slate-300 mt-1">
              Simulated airline GRC program: risks, vendors, and exceptions at a glance.
            </p>
          </div>
        </header>

        {/* Summary cards */}
        <section className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Open Risks</p>
            <p className="text-3xl font-semibold mt-2">{risks.length}</p>
            <p className="text-xs text-slate-400 mt-1">
              {highOrMediumRisks.length} Medium+ residual risk
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Critical Vendors</p>
            <p className="text-3xl font-semibold mt-2">
              {vendors.filter(v => v.tier === 'Critical').length}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {highRiskVendors.length} High residual vendor risk
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Open Exceptions</p>
            <p className="text-3xl font-semibold mt-2">{openExceptions.length}</p>
            <p className="text-xs text-slate-400 mt-1">Time-bound risk acceptances</p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Risks table */}
          <section className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
            <h2 className="text-lg font-semibold mb-3">Risk Register (Top Scenarios)</h2>
            <div className="max-h-64 overflow-auto">
              <table className="min-w-full text-sm">
                <thead className="text-slate-300">
                  <tr>
                    <th className="text-left py-1 pr-2">ID</th>
                    <th className="text-left py-1 pr-2">Asset</th>
                    <th className="text-left py-1 pr-2">Residual</th>
                    <th className="text-left py-1 pr-2">Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map(risk => (
                    <tr key={risk.id} className="border-t border-slate-800">
                      <td className="py-1 pr-2">{risk.id}</td>
                      <td className="py-1 pr-2 text-slate-200">{risk.assetId}</td>
                      <td className="py-1 pr-2">{risk.residualScore.toFixed(1)}</td>
                      <td className="py-1 pr-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${severityColor[risk.severity]}`}
                        >
                          {risk.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Scored using FAIR-lite methodology (Likelihood × Impact with control strength).
            </p>
          </section>

          {/* Vendors + Exceptions */}
          <section className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Vendor Risk Snapshot</h2>
              <ul className="space-y-1 text-sm">
                {vendors.map(v => (
                  <li key={v.id} className="flex items-center justify-between">
                    <span>
                      <span className="font-medium">{v.name}</span>{' '}
                      <span className="text-slate-400">({v.service})</span>
                    </span>
                    <span
                      className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        severityColor[v.residualRisk]
                      }`}
                    >
                      {v.residualRisk} risk
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Exceptions (Time-Bound)</h2>
              <ul className="space-y-1 text-sm">
                {exceptions.map(e => (
                  <li key={e.id} className="flex flex-col border-t border-slate-800 pt-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {e.id} – {e.assetId}
                      </span>
                      <span
                        className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          severityColor[e.residualRisk]
                        }`}
                      >
                        {e.status}
                      </span>
                    </div>
                    <span className="text-slate-300">{e.description}</span>
                    <span className="text-xs text-slate-500">
                      Expires / review: {e.expiry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Heatmap card */}
        <section className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-4">
          <h2 className="text-lg font-semibold mb-2">Risk Heatmap</h2>
          <p className="text-xs text-slate-400 mb-2">
            Generated from risk_heatmap_data.csv – residual risk after control strength scoring.
          </p>
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950">
            {/* Simple placeholder: embed PNG from root repo if you want via static hosting later */}
            <p className="text-xs text-slate-500 p-4">
              In a deployed version, this panel would render the heatmap image or a live chart
              from the shared risk data. For now, see <code>08-dashboard/risk_heatmap.png</code>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
