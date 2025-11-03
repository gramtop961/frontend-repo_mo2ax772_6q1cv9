import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400" />
            AI-first Operations Platform
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-6xl">
            Transform operations with agentic AI, automation, and decision intelligence
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Launch industry-tuned AI agents, automate complex workflows, and centralize enterprise management — all in one clean, modern platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800"
            >
              Book a demo
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50"
            >
              Explore solutions
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              'ISO 27001 ready',
              'SOC 2 friendly',
              'HIPAA aware',
              'GDPR aligned',
            ].map((label) => (
              <div key={label} className="rounded-md border border-slate-200 bg-white/70 px-3 py-2 text-center text-xs text-slate-600 backdrop-blur">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
