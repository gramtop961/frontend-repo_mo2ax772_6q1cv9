export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-slate-900">FluenceAI</div>
            <p className="mt-2 text-sm text-slate-600">
              Clean, modern platforms that blend agentic AI with enterprise-grade automation.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#solutions" className="hover:text-slate-900">Solutions</a></li>
              <li><a href="#why-us" className="hover:text-slate-900">Why Us</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Book a demo</div>
            <form className="mt-3 grid grid-cols-1 gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:border-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
              >
                Request demo
              </button>
              <p className="text-xs text-slate-500">We’ll get back within 24 hours.</p>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-black/5 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FluenceAI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
