import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Switch } from "@chakra-ui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // nav style
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors h-full px-3 pb-1 flex items-center !border-b-4 font-semibold text-[14px]
   ${
     isActive
       ? "!text-blue-600 !font-medium !border-blue-600"
       : "text-gray-600 !border-transparent hover:border-blue-600 hover:text-blue-600"
   }`;

  return (
    <nav className="bg-white shadow-sm   w-full  sticky top-0 z-50 ">
      <div className="container mx-auto  flex h-16 items-center justify-between pt-5 px-4">
        {/* left */}
        <div className="flex items-center gap-13 h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 pb-2">
            <img src="/logo.png" className="h-8 w-8 " />
            <span className="font-bold text-2xl uppercase">Logo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 h-full mb-[-6px] ">
            <NavLink to="" className={linkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/resources" className={linkClasses}>
              Resources
            </NavLink>
            <NavLink to="" className={linkClasses}>
              Toolkit
            </NavLink>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end gap-4 h-full pb-2">
          <div className="flex items-center gap-2">
            <Switch />

            <span className="hidden md:block text-sm font-semibold text-gray-800 ">
              Switch to Employee
            </span>
          </div>

          <span className="text-xl text-gray-300 font-light">|</span>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-green-300 flex items-center justify-center text-black font-bold text-sm">
              JA
            </div>
            <span className="hidden md:flex items-center gap-1 text-gray-600 tex-sm font-semibold ">
              Jonathan <ChevronDown size={15} />
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
