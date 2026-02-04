import { Link } from 'react-router-dom';

export default function QuickStart() {
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
                    <Link to="/dashboard" className="text-sm font-medium text-slate-400 hover:text-white">Back to Dashboard</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Quick Start Guide</h1>
                    <p className="text-xl text-slate-400">Get up and running with CodeSync in minutes</p>
                </div>

                {/* Steps */}
                <div className="space-y-8">
                    {[
                        {
                            step: 1,
                            title: 'Install the CLI',
                            description: 'Install CodeSync CLI globally using npm',
                            code: 'npm install -g @codesync/cli',
                        },
                        {
                            step: 2,
                            title: 'Authenticate',
                            description: 'Log in to your CodeSync account',
                            code: 'codesync login',
                        },
                        {
                            step: 3,
                            title: 'Start a Session',
                            description: 'Create or join a collaborative coding session',
                            code: 'codesync start\n# or\ncodesync join <session-id>',
                        },
                        {
                            step: 4,
                            title: 'Invite Collaborators',
                            description: 'Share your session with team members',
                            code: 'codesync invite user@example.com',
                        },
                    ].map((item) => (
                        <div key={item.step} className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 mb-4">{item.description}</p>
                                    <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm border border-white/5">
                                        <pre className="text-green-400 whitespace-pre-wrap">{item.code}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Resources */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface border border-white/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                            <span className="material-symbols-outlined text-2xl">menu_book</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Documentation</h4>
                        <p className="text-sm text-slate-400 mb-4">Complete guides and API reference</p>
                        <a href="#" className="text-primary text-sm font-medium hover:underline">Read Docs →</a>
                    </div>
                    <div className="bg-surface border border-white/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                            <span className="material-symbols-outlined text-2xl">play_circle</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Video Tutorials</h4>
                        <p className="text-sm text-slate-400 mb-4">Learn by watching step-by-step videos</p>
                        <a href="#" className="text-primary text-sm font-medium hover:underline">Watch Now →</a>
                    </div>
                    <div className="bg-surface border border-white/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                            <span className="material-symbols-outlined text-2xl">forum</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Community</h4>
                        <p className="text-sm text-slate-400 mb-4">Join our community on Discord</p>
                        <a href="#" className="text-primary text-sm font-medium hover:underline">Join Discord →</a>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link to="/editor" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(90,160,96,0.4)]">
                        <span>Start Coding</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}
