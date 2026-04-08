import { useState } from "react";

export default function Navigation({ data = {} }) {
  const [open, setOpen] = useState(false);
  const { links = [], title } = data;

  return (
    <nav className="w-full text-gray-400 grotesque-font">
      <div className="max-w-8xl mx-auto flex flex-row items-center justify-between px-5 py-6 md:px-7 relative">
        <a href="/">
          <span className="text-md select-none">{title}</span>
        </a>

        {/* Center links: desktop only */}
        <div className="absolute left-1/2 top-5 -translate-x-1 gap-14 md:gap-25 grotesque-font font-light hidden md:flex flex-row">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        {/* Hamburger: mobile only */}
        {!open && (
          <button
            className="flex flex-col cursor-pointer justify-center items-center space-y-1 md:hidden focus:outline-none"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="block w-7 h-0.5 bg-gray-400" />
            <span className="block w-7 h-0.5 bg-gray-400" />
          </button>
        )}
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#fdf9f2] z-50 flex flex-col px-6 pt-5 md:hidden">
          <div className="flex flex-row justify-between items-center py-2 mb-10">
            <a href="/" onClick={() => setOpen(false)}>
              <span className="text-md text-gray-900 select-none grotesque-font">{title}</span>
            </a>
            <button
              className="text-2xl cursor-pointer font-light text-gray-500 leading-none"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col grotesque-font font-light">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-light text-gray-900 py-4 border-b border-gray-100 hover:text-gray-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
