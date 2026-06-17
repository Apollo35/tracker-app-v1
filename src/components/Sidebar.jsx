import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  return (
    <div className="w-full md:w-64 border-r border-zinc-900 p-6">
      <h1 className="text-3xl font-black uppercase tracking-widest">TRACKER</h1>

      <div className="mt-12 space-y-4">
        <Link
          to="/"
          className={`block w-full px-4 py-3 text-left uppercase tracking-widest text-sm transition ${
            location.pathname === "/"
              ? "border border-green-500 text-green-500"
              : "border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className={`block w-full px-4 py-3 text-left uppercase tracking-widest text-sm transition ${
            location.pathname === "/analytics"
              ? "border border-green-500 text-green-500"
              : "border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"
          }`}
        >
          Analytics
        </Link>

        <Link
          to="/achievements"
          className={`block w-full px-4 py-3 text-left uppercase tracking-widest text-sm transition ${
            location.pathname === "/achievements"
              ? "border border-green-500 text-green-500"
              : "border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"
          }`}
        >
          Achievements
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
