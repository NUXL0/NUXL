import { useLocation } from "wouter";
import logo from "@assets/file_00000000fe2871fa9d18aa9ea57010e1_1779101410309.png";

export default function NUXLWebsite() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-green-950/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,100,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-green-500/20 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NUXL Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
          <h1 className="text-2xl font-bold tracking-widest text-green-400">NUXL</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-green-400 transition-colors duration-200">Dashboard</a>
          <a href="#" className="hover:text-green-400 transition-colors duration-200">Analytics</a>
          <a href="#" className="hover:text-green-400 transition-colors duration-200">Security</a>
          <button onClick={() => setLocation("/admin")} className="hover:text-green-400 transition-colors duration-200">Admin Panel</button>
        </nav>
        <button onClick={() => setLocation("/login")} className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold shadow-lg shadow-green-500/30">
          Login
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="max-w-4xl">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="NUXL Logo" className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-[0_0_40px_rgba(74,222,128,0.5)]" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            System Online — All Services Operational
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wide leading-tight">
            Welcome to <span className="text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.4)]">NUXL</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Professional Cyber Styled Website with Modern Dashboard, Full Admin Access, Security Analytics & Powerful UI Design.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <button onClick={() => setLocation("/login")} className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-bold shadow-2xl shadow-green-500/40">
              Open Dashboard
            </button>
            <button className="px-8 py-4 rounded-2xl border border-green-500/60 text-green-400 hover:bg-green-500/10">
              View Features
            </button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="relative z-10 px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { title: "Active Users", value: "12,580", desc: "Users currently connected", accent: "text-green-400" },
          { title: "Server Status", value: "99.9%", desc: "All systems operational", accent: "text-emerald-400" },
          { title: "Security Alerts", value: "18", desc: "Protected threats detected", accent: "text-yellow-400" },
          { title: "Admin Access", value: "FULL", desc: "Complete management control", accent: "text-green-400" },
        ].map((card, i) => (
          <div key={i} className="bg-white/5 border border-green-500/20 rounded-3xl p-6 backdrop-blur-xl hover:border-green-400/60 hover:scale-105 transition-all duration-300">
            <h3 className="text-gray-400 text-xs uppercase tracking-widest">{card.title}</h3>
            <div className={`mt-4 text-4xl font-black ${card.accent}`}>{card.value}</div>
            <p className="mt-3 text-gray-500 text-sm">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Admin Section */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <div className="bg-white/5 border border-green-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-green-500/70 mb-3">Control Center</div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Professional <span className="text-green-400">Admin Panel</span></h2>
              <p className="mt-3 text-gray-400 max-w-2xl text-sm leading-relaxed">
                Manage users, monitor activity, control permissions, analytics, logs, and security systems.
              </p>
            </div>
            <button onClick={() => setLocation("/login")} className="shrink-0 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/30">
              Access Admin
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: "User Management", items: ["Ban / Unban Users", "Role Permissions", "Login Tracking", "Access Controls"] },
              { title: "Security System", items: ["Firewall Monitoring", "Live Alerts", "Threat Analytics", "Real-time Logs"] },
              { title: "Server Controls", items: ["Restart Systems", "Database Access", "API Controls", "Performance Metrics"] },
            ].map((panel, i) => (
              <div key={i} className="bg-black/40 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-colors group">
                <h3 className="text-lg font-bold text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 group-hover:animate-pulse"></span>
                  {panel.title}
                </h3>
                <ul className="mt-4 space-y-3 text-gray-400 text-sm">
                  {panel.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2"><span className="text-green-500/60">›</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 py-8 text-center text-gray-500 text-sm bg-black/40 backdrop-blur-md">
        © 2026 NUXL — Cyber Dashboard & Admin Panel.
      </footer>
    </div>
  );
}
