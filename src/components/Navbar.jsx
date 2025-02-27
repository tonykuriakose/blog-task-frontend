import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuthStore();
    const location = useLocation();

    const getLinkClass = (path) => 
        location.pathname === path ? "text-yellow-200" : "hover:text-yellow-200 transition";

    return (
        <nav className="flex justify-between items-center px-4 md:px-10 py-5 bg-slate-500 text-white shadow-md fixed w-full z-[2]">
            <Link to="/" className="text-xl font-bold">Cheenta Academy</Link>

            <div className="space-x-4 md:space-x-8">
                <Link className={getLinkClass("/")} to="/">Home</Link>
                <Link className={getLinkClass("/create")} to="/create">Create Blog</Link>
                <Link className={getLinkClass("/profile")} to="/profile">Profile</Link>
                {isAuthenticated ? (
                    <button className="bg-red-500 px-4 py-1 hover:bg-red-600 transition rounded" onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login" className="bg-green-500 px-4 py-1 hover:bg-green-600 transition rounded">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
