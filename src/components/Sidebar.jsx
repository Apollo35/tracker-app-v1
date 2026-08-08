import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navigation = [
    { path: "/", label: "Dashboard" },
    { path: "/analytics", label: "Analytics" },
    { path: "/companion", label: "Companion" },
    { path: "/shop", label: "Shop" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <aside className="w-full border-b border-zinc-800 bg-zinc-950 p-4 md:w-64 md:min-h-screen md:border-b-0 md:border-r md:p-6">
      <div className="flex items-center justify-between md:block">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-500">
            HABIT SYSTEM
          </p>

          <h1 className="mt-1 text-3xl font-black uppercase tracking-widest">
            TRACKER
          </h1>
        </div>
      </div>

      <nav className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-12 md:grid-cols-1 md:gap-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block border px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.15em] transition ${
                isActive
                  ? "border-green-500 bg-green-500 text-black"
                  : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 hidden border-t border-zinc-800 pt-6 md:block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          LOCAL MODE
        </p>

        <p className="mt-1 text-xm font-bold uppercase text-green-500">
          Active
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
