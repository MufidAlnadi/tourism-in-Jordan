import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <nav className="bg-blue-500 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-white font-bold text-xl">
                Tourism in Jordan
              </Link>
            </div>
            <div className="flex">
              <Link to="/" className="text-white px-4 hover:underline">
                Home
              </Link>
              <Link to="/about" className="text-white px-4 hover:underline">
                About
              </Link>
              <Link to="/contact" className="text-white px-4 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
}
 
export default Navbar;