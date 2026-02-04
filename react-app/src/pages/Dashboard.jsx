import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background-dark text-white font-display">
            {/* Header */}
            <header className="bg-surface border-b border-white/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 bg-primary rounded-lg text-white shadow-[0_0_15px_rgba(90,160,96,0.5)]">
                            <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <Link to="/" className="text-xl font-bold tracking-tight">CodeSync</Link>
                    </div>
                    <nav className="flex items-center gap-6">
                        <Link to="/dashboard" className="text-sm font-medium text-white">Dashboard</Link>
                        <Link to="/editor" className="text-sm font-medium text-slate-400 hover:text-white">Editor</Link>
                        <Link to="/quickstart" className="text-sm font-medium text-slate-400 hover:text-white">Quick Start</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-slate-400">Manage your projects and collaborations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Card Example */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">folder</span>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Active</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Project {i}</h3>
                            <p className="text-sm text-slate-400 mb-4">React application with collaborative features</p>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="size-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-surface"></div>
                                    <div className="size-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-surface"></div>
                                    <div className="size-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-surface"></div>
                                </div>
                                <span className="text-xs text-slate-500 ml-1">3 collaborators</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link to="/editor" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(90,160,96,0.4)]">
                        <span className="material-symbols-outlined">add</span>
                        <span>Create New Project</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}
