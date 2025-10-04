import { ShoppingCart, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1635px] mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <h1 className="text-[30px] font-medium font-sedgwick">
            Book
            <span className="text-[#C17100] font-semibold">Sansar</span>
          </h1>
        </div>

        {/* Links + Icons Group */}
        <div className="flex items-center gap-23">
          {/* Navigation Links */}
          <ul className="flex gap-15 list-none text-gray-700 font-medium">
            <li className="hover:underline cursor-pointer">HOME</li>
            <li className="hover:underline cursor-pointer">EXPLORE</li>
            <li className="hover:underline cursor-pointer">SHOP</li>
            <li className="hover:underline cursor-pointer">SELL</li>
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-13">
            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-bold rounded-full px-1">
                2
              </span>
            </div>

            {/* User */}
            <div className="cursor-pointer">
              <User size={24} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
