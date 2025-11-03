import { Bot, Workflow, Building2, LineChart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    id: 'agentic-ai',
    title: 'Generative / Agentic AI Platforms',
    description:
      'Autonomous AI agents that plan, reason, and execute multi‑step tasks. Industry‑tuned frameworks for healthcare, fintech, and beyond.',
    points: [
      'Automated operations and lead nurturing',
      'Policy enforcement and data synthesis',
      'Compliance-aware agents for regulated industries',
    ],
    icon: Bot,
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'hyperautomation',
    title: 'Business Process Automation / Hyperautomation',
    description:
      'Unified platform blending RPA, workflow orchestration, and AI. Replace repetitive manual work with plug-and-play automation.',
    points: [
      'Approvals, migrations, reconciliations',
      'Onboarding workflows across ERP/CRM/HR',
      'Connects to your existing stack in minutes',
    ],
    icon: Workflow,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'enterprise-cloud',
    title: 'Enterprise Management Cloud (ERP + CRM + HR)',
    description:
      'Integrated cloud for HR, finance, supply chain, sales, and engagement — AI insights without SAP-scale complexity.',
    points: [
      'Modular ERP built for mid-sized teams',
      'Workforce tracking and financial analytics',
      'End-to-end supply visibility',
    ],
    icon: Building2,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'decision-intelligence',
    title: 'Predictive Analytics & Decision Intelligence',
    description:
      'ML-driven hub for forecasting, anomaly detection, and simulation. Real-time what‑if insights as a service.',
    points: [
      'Demand and revenue forecasting',
      'Churn and fraud detection',
      'Scenario planning and simulation',
    ],
    icon: LineChart,
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'compliance-repo',
    title: 'Automated Compliance & Risk Governance',
    description:
      'Continuously updated control repository mapped to ISO 27001, SOC 2, HIPAA, GDPR. Evidence automation built-in.',
    points: [
      'Auto-generated audit artifacts & evidence',
      'Real-time policy tracking and change alerts',
      'AI monitors control health & regulations',
    ],
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-500',
  },
];

function SolutionCard({ title, description, points, icon: Icon, accent }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}>
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 text-emerald-500" size={16} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a href="#contact" className="inline-flex items-center text-sm font-medium text-slate-900 hover:opacity-80">
          Learn more
          <ArrowRight className="ml-1" size={16} />
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-slate-900/10" />
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-x-0 top-0 -z-0 h-[600px] bg-gradient-to-b from-white via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for modern, data-driven companies
          </h2>
          <p className="mt-3 text-slate-600">
            Choose exactly what you need today and add more modules as you grow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 3).map((s) => (
            <SolutionCard key={s.id} {...s} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {solutions.slice(3).map((s) => (
            <SolutionCard key={s.id} {...s} />
          ))}
        </div>

        <div id="why-us" className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Stat kpi="40%" label="Faster process cycles" />
            <Stat kpi="99.9%" label="Data accuracy with AI validation" />
            <Stat kpi="< 30 days" label="Average time to first value" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold tracking-tight text-slate-900">{kpi}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}
