import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import usePopup from "../hooks/usePopup";
import Login from "../pages/Login";

function Header() {
    const popup = usePopup();
    return (
        <>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo*/}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="SkillBridge"
                        className="h-20 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 md:flex lg:gap-8">
                      <Link
                        to="/"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                       Home
                    </Link>

                    <Link
                        to="/how-it-works"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        How It Works
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        About
                    </Link>

                    <Link
                        to="/help"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        Help
                    </Link>
                      <Link
                        
                       to="/login"
                        className="text-sm text-slate-400 transition hover:text-white"
                    >
                        Sign In
                    </Link>
                    
                    <Link
                        to="/register"
                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        Get Started
                    </Link>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

            </div>
        </header>
       
    </>
    );
}

export default Header;