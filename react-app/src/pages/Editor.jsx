import { Link } from 'react-router-dom';

export default function Editor() {
    return (
        <div className="h-screen bg-background-dark text-white font-display flex flex-col">
            {/* Top Bar */}
            <div className="bg-charcoal border-b border-white/10 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        <span className="text-sm font-medium">Back to Dashboard</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">folder</span>
                        <span className="text-sm font-medium">My Project</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">share</span>
                        <span>Share</span>
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-sm font-bold transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                        <span>Run</span>
                    </button>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-charcoal border-r border-white/10 flex flex-col">
                    <div className="p-4 border-b border-white/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Files</span>
                            <button className="text-slate-400 hover:text-white">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        {['App.jsx', 'index.jsx', 'components/Header.jsx', 'components/Footer.jsx', 'styles/App.css', 'utils/helpers.js'].map((file, i) => (
                            <div key={i} className="px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-primary">description</span>
                                <span>{file}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Code Editor Mockup */}
                <div className="flex-1 flex flex-col">
                    {/* Tabs */}
                    <div className="bg-surface border-b border-white/10 flex items-center px-2">
                        <div className="px-4 py-2 bg-background-dark border-r border-white/10 flex items-center gap-2 text-sm font-medium">
                            <span className="material-symbols-outlined text-[16px] text-primary">description</span>
                            <span>App.jsx</span>
                            <button className="ml-2 text-slate-500 hover:text-white">
                                <span className="material-symbols-outlined text-[14px]">close</span>
                            </button>
                        </div>
                    </div>

                    {/* Code Area */}
                    <div className="flex-1 bg-[#1e1e1e] p-6 overflow-auto font-mono text-sm">
                        <div className="flex gap-4 text-slate-300">
                            <div className="text-slate-600 select-none text-right min-w-[2rem]">
                                {Array.from({ length: 20 }, (_, i) => (
                                    <div key={i}>{i + 1}</div>
                                ))}
                            </div>
                            <div>
                                <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                                <div><span className="text-purple-400">import</span> <span className="text-yellow-200">Header</span> <span className="text-purple-400">from</span> <span className="text-green-400">'./components/Header'</span>;</div>
                                <div> </div>
                                <div><span className="text-blue-400">function</span> <span className="text-yellow-200">App</span>() {'{'}</div>
                                <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                                <div className="pl-8">&lt;<span className="text-pink-400">div</span> <span className="text-orange-300">className</span>=<span className="text-green-400">"app"</span>&gt;</div>
                                <div className="pl-12">&lt;<span className="text-pink-400">Header</span> /&gt;</div>
                                <div className="pl-12">&lt;<span className="text-pink-400">main</span>&gt;</div>
                                <div className="pl-16">&lt;<span className="text-pink-400">h1</span>&gt;Welcome to CodeSync&lt;/<span className="text-pink-400">h1</span>&gt;</div>
                                <div className="pl-12">&lt;/<span className="text-pink-400">main</span>&gt;</div>
                                <div className="pl-8">&lt;/<span className="text-pink-400">div</span>&gt;</div>
                                <div className="pl-4">);</div>
                                <div>{'}'}</div>
                                <div> </div>
                                <div><span className="text-purple-400">export default</span> <span className="text-yellow-200">App</span>;<span className="w-2 h-4 bg-primary animate-pulse inline-block ml-1"></span></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Panel */}
                    <div className="h-48 bg-charcoal border-t border-white/10 flex flex-col">
                        <div className="flex items-center gap-4 px-4 py-2 border-b border-white/10">
                            <button className="text-sm font-medium text-white">Terminal</button>
                            <button className="text-sm font-medium text-slate-400 hover:text-white">Console</button>
                            <button className="text-sm font-medium text-slate-400 hover:text-white">Problems</button>
                        </div>
                        <div className="flex-1 p-4 font-mono text-sm overflow-auto">
                            <div className="text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-primary">➜</span>
                                    <span className="text-blue-400">~/project</span>
                                    <span>npm run dev</span>
                                </div>
                                <div className="text-slate-500 mt-2">
                                    <div>VITE v5.0.0 ready in 234 ms</div>
                                    <div className="mt-1">➜ Local:   <span className="text-cyan-400">http://localhost:5173/</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Collaborators */}
                <div className="w-64 bg-charcoal border-l border-white/10 flex flex-col">
                    <div className="p-4 border-b border-white/10">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Collaborators</span>
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                        {[
                            { name: 'Sarah Chen', status: 'online', color: 'from-purple-400 to-pink-400' },
                            { name: 'Alex Kumar', status: 'typing', color: 'from-blue-400 to-cyan-400' },
                            { name: 'Jordan Lee', status: 'away', color: 'from-green-400 to-emerald-400' },
                        ].map((user, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`size-8 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-white text-xs font-bold`}>
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-white">{user.name}</div>
                                    <div className="text-xs text-slate-400">{user.status}</div>
                                </div>
                                <div className={`size-2 rounded-full ${user.status === 'online' || user.status === 'typing' ? 'bg-green-500' : 'bg-slate-500'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
