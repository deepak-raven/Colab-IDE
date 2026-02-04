import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden">
            <div className="min-h-screen flex flex-col lg:flex-row w-full">
                {/* Left Side - Welcome Section */}
                <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden mesh-bg p-8 lg:p-16">
                    <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5AA060 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="relative z-10 w-full max-w-lg flex flex-col gap-8">
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                                Welcome back,<br /><span className="text-primary">developer.</span>
                            </h1>
                            <p className="text-gray-300 text-lg lg:text-xl font-light max-w-md mx-auto lg:mx-0">
                                Ship faster, together. Join your team in the cloud and code in real-time.
                            </p>
                        </div>

                        {/* Code Preview */}
                        <div className="w-full glass-panel rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 border border-white/10 mt-8 hidden sm:block">
                            <div className="bg-[#1a1d1b] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <div className="ml-4 text-xs text-gray-500 font-mono">main.tsx</div>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 bg-[#131613]/80">
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">1</div>
                                    <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">2</div>
                                    <div><span className="text-purple-400">import</span> {'{'} <span className="text-yellow-200">Collaborate</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@codesync/core'</span>;</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">3</div>
                                    <div> </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">4</div>
                                    <div><span className="text-blue-400">const</span> <span className="text-yellow-200">App</span> = () =&gt; {'{'}</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">5</div>
                                    <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">6</div>
                                    <div className="pl-8"><span className="text-gray-500">&lt;</span><span className="text-pink-400">Collaborate</span> <span className="text-orange-300">mode</span>=<span className="text-green-400">"realtime"</span> /<span className="text-gray-500">&gt;</span></div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">7</div>
                                    <div className="pl-4">);</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">8</div>
                                    <div>{'}'};</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">9</div>
                                    <div> </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-gray-600 select-none text-right w-6">10</div>
                                    <div className="flex items-center"><span className="text-purple-400">export default</span> <span className="text-yellow-200">App</span>;<span className="w-2 h-4 bg-primary animate-pulse ml-1"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="relative w-full lg:w-1/2 bg-[#000000] flex items-center justify-center p-4">
                    <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="w-full max-w-[440px] z-10">
                        <div className="mb-10 flex items-center gap-2 justify-center lg:justify-start">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-[20px] font-bold">code</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">CodeSync</span>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl shadow-xl w-full">
                            <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>

                            {/* Social Login */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#2e332e] hover:bg-[#3a403a] text-white text-sm font-medium transition-colors border border-transparent hover:border-white/10">
                                    <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4. 02-1.47-.105-.255-.54-1.095-1.095-1.32-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.527.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.545 3.285-1.23 3.285-1.23.66 1.653.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                                    </svg>
                                    <span className="truncate">GitHub</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#2e332e] hover:bg-[#3a403a] text-white text-sm font-medium transition-colors border border-transparent hover:border-white/10">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"></path>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                    </svg>
                                    <span className="truncate">Google</span>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative flex py-2 items-center mb-6">
                                <div className="flex-grow border-t border-[#434c44]"></div>
                                <span className="flex-shrink-0 mx-4 text-xs text-[#a6b0a7] uppercase tracking-wider">Or continue with email</span>
                                <div className="flex-grow border-t border-[#434c44]"></div>
                            </div>

                            {/* Email/Password Form */}
                            <form className="flex flex-col gap-5">
                                <label className="flex flex-col">
                                    <span className="text-gray-300 text-sm font-medium mb-1.5">Email Address</span>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">mail</span>
                                        <input
                                            className="form-input w-full rounded-lg bg-[#0a0a0a] border border-[#2e332e] focus:border-primary focus:ring-1 focus:ring-primary h-11 pl-10 pr-4 text-white placeholder-gray-600 text-sm transition-all"
                                            placeholder="name@work-email.com"
                                            type="email"
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-gray-300 text-sm font-medium">Password</span>
                                        <a className="text-primary text-xs font-medium hover:underline hover:text-green-400" href="#">Forgot Password?</a>
                                    </div>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">lock</span>
                                        <input
                                            className="form-input w-full rounded-lg bg-[#0a0a0a] border border-[#2e332e] focus:border-primary focus:ring-1 focus:ring-primary h-11 pl-10 pr-4 text-white placeholder-gray-600 text-sm transition-all"
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                </label>
                                <Link
                                    to="/dashboard"
                                    className="mt-2 w-full flex items-center justify-center rounded-lg h-11 bg-primary hover:bg-primary-hover text-white text-sm font-bold tracking-wide transition-all transform active:scale-[0.99]"
                                >
                                    Log In
                                </Link>
                            </form>

                            <p className="text-center mt-6 text-sm text-[#a6b0a7]">
                                Don't have an account?
                                <a className="text-primary font-semibold hover:underline hover:text-green-400 ml-1" href="#">Sign up</a>
                            </p>
                        </div>

                        <p className="text-center mt-8 text-xs text-gray-600">
                            By clicking continue, you agree to our <a className="underline hover:text-gray-400" href="#">Terms of Service</a> and <a className="underline hover:text-gray-400" href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
