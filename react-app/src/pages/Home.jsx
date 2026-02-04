import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background-dark">
                <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay z-10"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] animate-float-slow"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-charcoal/90 rounded-full blur-[100px]"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-charcoal/80 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[0%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] animate-float-medium"></div>

                {/* Animated code flow lines */}
                <div className="absolute top-[15%] left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[1px] animate-code-flow" style={{ animationDuration: '25s' }}></div>
                <div className="absolute top-[35%] left-0 w-[25%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[1px] animate-code-flow" style={{ animationDuration: '18s', animationDelay: '5s' }}></div>
                <div className="absolute top-[60%] left-0 w-[35%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[1px] animate-code-flow" style={{ animationDuration: '30s', animationDelay: '2s' }}></div>
                <div className="absolute top-[80%] left-0 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-[1px] animate-code-flow" style={{ animationDuration: '22s', animationDelay: '10s' }}></div>

                {/* SVG network nodes */}
                <svg className="absolute inset-0 w-full h-full opacity-30 z-0" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#5AA060', stopOpacity: 0 }}></stop>
                            <stop offset="50%" style={{ stopColor: '#5AA060', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#5AA060', stopOpacity: 0 }}></stop>
                        </linearGradient>
                    </defs>
                    <circle className="animate-pulse-glow" cx="85%" cy="15%" fill="#5AA060" r="3"></circle>
                    <circle className="animate-pulse-glow" cx="75%" cy="25%" fill="#5AA060" r="2" style={{ animationDelay: '1s' }}></circle>
                    <line stroke="url(#grad1)" strokeWidth="1" x1="85%" x2="75%" y1="15%" y2="25%"></line>
                    <circle className="animate-pulse-glow" cx="92%" cy="35%" fill="#ffffff" r="2" style={{ animationDelay: '2s', opacity: 0.5 }}></circle>
                    <line stroke="url(#grad1)" strokeWidth="0.5" x1="75%" x2="92%" y1="25%" y2="35%"></line>
                    <circle className="animate-pulse-glow" cx="10%" cy="85%" fill="#5AA060" r="3"></circle>
                    <circle className="animate-pulse-glow" cx="20%" cy="92%" fill="#5AA060" r="2" style={{ animationDelay: '1.5s' }}></circle>
                    <line stroke="url(#grad1)" strokeWidth="0.5" x1="10%" x2="20%" y1="85%" y2="92%"></line>
                    <circle className="animate-pulse-glow" cx="5%" cy="75%" fill="#fff" r="1.5" style={{ animationDelay: '3s' }}></circle>
                    <line stroke="url(#grad1)" strokeWidth="0.5" x1="5%" x2="10%" y1="75%" y2="85%"></line>
                </svg>
            </div>

            <div className="relative min-h-screen flex flex-col z-10">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white">
                            <div className="flex items-center justify-center size-8 bg-primary rounded-lg text-white shadow-[0_0_15px_rgba(90,160,96,0.5)]">
                                <span className="material-symbols-outlined text-[20px]">code</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">CodeSync</h2>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Product</a>
                            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Pricing</a>
                            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Enterprise</a>
                            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Docs</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors">
                                Sign In
                            </Link>
                            <Link to="/login" className="flex items-center justify-center h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-all shadow-[0_4px_14px_0_rgba(90,160,96,0.39)]">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow pt-24 pb-12">
                    {/* Hero Section */}
                    <section className="relative px-6 py-12 md:py-20 lg:py-28 max-w-7xl mx-auto">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                            <div className="flex flex-col gap-6 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-xs font-medium text-primary uppercase tracking-wider">v2.0 Now Available</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
                                    The Future of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Pair Programming</span>
                                </h1>
                                <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
                                    Code, debug, and ship together in real-time. The collaborative IDE built for remote engineering teams who want to move fast.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                    <Link to="/login" className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(90,160,96,0.4)]">
                                        <span>Get Started for Free</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                    <button className="h-12 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white">play_circle</span>
                                        <span>Watch Demo</span>
                                    </button>
                                </div>
                                <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-lg text-primary">check</span>
                                        <span>No credit card required</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-lg text-primary">check</span>
                                        <span>14-day free trial</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface/50 backdrop-blur-md group">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW7NFW6brQDkz4fu2AdfZJyE71d6hqEEfBhmrKeI2G20izaT1Oyd_9_UZw-8co9HcNz51J817V3Exa1qfvhKU9JglBGgCsmYK0za699wVISHd_9s4ioM0dKRsMbLU_3CHHjDHxzeeKd3Vc-D4WAyKPHb0-yZtxKN6NDX-rhGtKFZY3vGBXk1ESSypnShTgI1lFsJxKADgjLRSgEqNvWnfSixgn9WRqHSXzhADq4X3as_nfNGPs3fllYAqYE-v_8CL27aHnuA5Geks')", opacity: 0.8 }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-10 left-6 right-6 p-4 bg-charcoal/90 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-4 transform transition-transform group-hover:translate-y-[-5px] shadow-lg">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">terminal</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Compiling Project...</div>
                                        <div className="text-xs text-slate-400">Build successful in 420ms</div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Column */}
                            <div className="relative z-10 flex flex-col justify-center">
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                    Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Synchronized</span><br />
                                    Development Power
                                </h2>
                                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                                    Stop screen sharing. Start interacting. Experience the fluidity of local development with the power of multiplayer connection.
                                </p>

                                {/* Interactive Area with Cursors */}
                                <div className="relative h-64 w-full mb-8 select-none pointer-events-none">
                                    {/* Cursor 1: Multi */}
                                    <div className="absolute top-10 left-10 cursor-1 z-20">
                                        <svg className="w-6 h-6 text-primary drop-shadow-md transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" />
                                        </svg>
                                        <div className="ml-4 -mt-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                            Multi
                                        </div>
                                    </div>

                                    {/* Cursor 2: Cursor */}
                                    <div className="absolute top-1/2 left-1/2 cursor-2 z-10">
                                        <svg className="w-6 h-6 text-blue-500 drop-shadow-md transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" />
                                        </svg>
                                        <div className="ml-4 -mt-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                            Cursor
                                        </div>
                                    </div>

                                    {/* Cursor 3: Support */}
                                    <div className="absolute bottom-10 right-20 cursor-3 z-30">
                                        <svg className="w-6 h-6 text-purple-500 drop-shadow-md transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" />
                                        </svg>
                                        <div className="ml-4 -mt-2 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                            Support
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal */}
                                <div className="bg-[#1e1e1e] rounded-xl border border-white/10 p-5 font-mono text-sm shadow-2xl w-full max-w-md transform transition-transform hover:scale-[1.02]">
                                    <div className="flex gap-2 mb-4 opacity-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <span className="text-primary font-bold">➜</span>
                                        <span className="text-blue-400">~</span>
                                        <div className="typing-text pr-1">ping 8.8.8.8 -t --zero-latency</div>
                                    </div>
                                    <div className="text-slate-500 mt-2 text-xs">
                                        64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=12ms<br />
                                        64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=11ms
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Orbits */}
                            <div className="relative flex items-center justify-center h-[600px] lg:h-auto">
                                {/* Rings */}
                                <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full"></div>
                                <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full"></div>

                                {/* Center Hub */}
                                <div className="relative z-10 flex flex-col items-center justify-center size-32 bg-background-dark border border-white/10 rounded-full shadow-[0_0_50px_rgba(90,160,96,0.2)]">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-1">hub</span>
                                    <span className="text-xs font-bold text-white tracking-widest">SYNC</span>
                                </div>

                                {/* Orbiting Elements Ring 1 */}
                                <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] orbit-container">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-item">
                                        <div className="size-12 rounded-full border-2 border-surface bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYe4kGI78kcO-o291nw4eolVwBfktDFjUnxd8cKo8G5qZxKACH2LnnrtZxEHuNJDLH4jcTu0iUrIv_1PNRhZieXBZ282n1Fc35tXQeEONSf_bZxCwcZig0QOraXZYgEi9U2Q4eIunIWpNzcFNtqIu-Be0z2JOXM-7BJmVoZQ7zU6leTN1ryxYVZckRNSc4vA36pVjJQdMB8_ueA_pJxzxMbKH8ppGJ2WFuk-XCcsjEnZuNVJFDcmAv2w1yIbwdUGq3pQXAog82DZA')" }}></div>
                                        <div className="absolute top-0 right-0 size-3 bg-green-500 border-2 border-surface rounded-full"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 orbit-item">
                                        <div className="size-10 rounded-full border-2 border-surface bg-cover bg-center shadow-lg grayscale opacity-70" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpUER6c_f3AXY1T4t2-69dhxosE1tLMKNBS5yq1LVFunVvEew7GDEVFcclK3JCiRgynTR5KZExyhQmiI65ld_UDW6HGKHVBIMtFNUg7wuKeeTij336vhjmRzv26_5_YErjvliq3YzcI1ZTJ9kch9Vrepx1TwUZHuqj-v-lD7ORuXZ25rY7lBdyfOops3ywWTnBLPmOJt-Jyjjb_gyeYKNLrOPtsIBhG5yt5021PY0FRD-tsKRVrQ5fAJTPKxxIF2LvcKeqPA-JnXs')" }}></div>
                                    </div>
                                </div>

                                {/* Orbiting Elements Ring 2 */}
                                <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] orbit-container" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
                                    <div className="absolute top-1/4 left-0 -translate-x-1/2 orbit-item" style={{ animationDirection: 'normal' }}>
                                        <div className="size-14 rounded-full border-2 border-surface bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm-68txnSBqUrbdA-EvewmhL47aEIOR71MTy8KBNK1YHG5ZFfqJOhJLziOZBI8Lm13-IM1dW7TC6tM74EN-fFvB978vHlY2WcumR2CKKeuBlCJbpXABi7HcadGkMGsghdOgy_9YofEqBdUc5hip36nxCe-iCMy69WjtJSC7NNxP0e0y-PgmMYSc7TyAx-7wqcNTzhUd6F7ZLLh967Z8weJ_-smnbxdFphEczy9RecLUZal0LZmrrldtPdh_t465tsTX5vR-nOlt9Q')" }}></div>
                                        <div className="absolute top-0 right-0 size-4 bg-primary border-2 border-surface rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[8px] text-white">mic</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1/4 right-0 translate-x-1/2 orbit-item" style={{ animationDirection: 'normal' }}>
                                        <div className="size-12 rounded-full border-2 border-surface bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClJSeB7irgUv9rTOtk8AMCnz2ttKy7Bl5iFAEnXybT0i7tqlAEP7xIaNb3CyliCsr5ucv4K74SrpcT_mSMQ09UnQXHFE3miXTfqmI0S0wxF_vVVIVFKxJxu8tZdV0hsKkAWUWmaNSTALZfHAFmfZVL4dm3I_A_DvxYtgYcwyopgBr89tXwMdrvk1nC6npwN-dcLEWSZ5mFlhLBiOpCcOd6PXeOWhPEK84zMoy62cRo6k5l7dMa7g4DgRH141uVorYSTQ60CiAYSkM')" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video Demo Section */}
                    <section className="py-12 px-6 max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white">Watch CodeSync in Action</h2>
                            <p className="text-slate-400 mt-2">See how multiple developers collaborate in a single file.</p>
                        </div>
                        <div className="relative rounded-xl bg-surface/50 backdrop-blur-sm shadow-2xl border border-white/10 overflow-hidden ring-1 ring-white/5">
                            <div className="flex items-center px-4 py-3 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-[#3c3c3c]"></div>
                                    <div className="size-3 rounded-full bg-[#3c3c3c]"></div>
                                    <div className="size-3 rounded-full bg-[#3c3c3c]"></div>
                                </div>
                                <div className="flex-1 text-center">
                                    <div className="inline-block px-3 py-1 rounded-md bg-black/40 text-xs text-slate-400 font-mono">
                                        main.tsx — CodeSync
                                    </div>
                                </div>
                                <div className="w-14"></div>
                            </div>
                            <div className="relative aspect-video w-full bg-[#0d1117] group cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAW7NFW6brQDkz4fu2AdfZJyE71d6hqEEfBhmrKeI2G20izaT1Oyd_9_UZw-8co9HcNz51J817V3Exa1qfvhKU9JglBGgCsmYK0za699wVISHd_9s4ioM0dKRsMbLU_3CHHjDHxzeeKd3Vc-D4WAyKPHb0-yZtxKN6NDX-rhGtKFZY3vGBXk1ESSypnShTgI1lFsJxKADgjLRSgEqNvWnfSixgn9WRqHSXzhADq4X3as_nfNGPs3fllYAqYE-v_8CL27aHnuA5Geks')" }}></div>
                                <div className="absolute top-1/3 left-1/4 flex flex-col items-start animate-bounce duration-[2000ms]">
                                    <div className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-lg shadow-primary/20">
                                        Sarah
                                    </div>
                                    <div className="h-6 w-0.5 bg-primary shadow-[0_0_8px_rgba(90,160,96,0.8)]"></div>
                                </div>
                                <div className="absolute bottom-1/3 right-1/3 flex flex-col items-start animate-bounce duration-[2500ms]">
                                    <div className="bg-white px-2 py-0.5 rounded text-[10px] font-bold text-black">Alex</div>
                                    <div className="h-6 w-0.5 bg-white"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                                    <button className="flex items-center justify-center size-20 rounded-full bg-primary/90 text-white shadow-[0_0_30px_rgba(90,160,96,0.6)] hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to code together?</h2>
                        <p className="text-xl text-slate-400 mb-10">Join thousands of developers building the future with CodeSync.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/login" className="h-14 px-8 bg-white text-background-dark font-bold text-lg rounded-lg hover:bg-slate-200 transition-colors shadow-lg w-full sm:w-auto inline-flex items-center justify-center">
                                Sign Up for Free
                            </Link>
                            <button className="h-14 px-8 bg-transparent border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
                                Contact Sales
                            </button>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-charcoal border-t border-white/5 py-12 px-6 relative z-10 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-primary">code</span>
                                <h3 className="text-xl font-bold">CodeSync</h3>
                            </div>
                            <p className="text-slate-500 text-sm max-w-xs">
                                The world's most advanced collaborative IDE. <br />
                                Built for speed, designed for teams.
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined">flutter_dash</span>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined">code</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-16 flex-wrap">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Product</h4>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Features</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Integrations</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Pricing</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Changelog</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">About</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Blog</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Careers</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Contact</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Legal</h4>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Privacy</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Terms</a>
                                <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Security</a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                        © 2023 CodeSync Inc. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
}
