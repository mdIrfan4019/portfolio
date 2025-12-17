


import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-8 md:px-24 py-6">
      <div className="flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-gray-900">
          Irfan<span className="text-primary
">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-primary
">Home</a></li>
          <li><a href="#projects" className="hover:text-primary
">Projects</a></li>
          <li><a href="#about" className="hover:text-primary
">About</a></li>
          {/* <li><a href="#skills" className="hover:text-primary
">Skills</a></li>
          <li><a href="#contact" className="hover:text-primary
">Contact</a></li> */}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* RESUME BUTTON */}
          <a
            href="/Irfan_Resume.pdf"
            download
            className="hidden md:flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-primary
 hover:text-primary
 transition"
          >
            Resume
          </a>

          {/* HAMBURGER ICON (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 rounded-2xl border border-gray-200 p-6">
          <ul className="flex flex-col gap-6 font-medium text-gray-700">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            {/* <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li> */}

            {/* RESUME (MOBILE) */}
            <li>
              <a
                href="/Irfan_Resume.pdf"
                download
                className="inline-block mt-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
