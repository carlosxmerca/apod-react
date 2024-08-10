import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/nasa.webp";

interface HeaderProps {
  showNav?: boolean;
}

export default function Header({ showNav = true }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="sticky bg-[#0d0d0d] z-50 top-0 w-full py-4 max-w-[60rem]">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl">APOD</p>
        <img className="h-12 object-contain" src={logo} />
      </div>
      {showNav && (
        <nav className="w-full flex justify-around mt-6">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "border-b-2 border-white"
                : "text-[#A6A6A6]"
            }
          >
            Explore
          </Link>
          <Link
            to="/range"
            className={
              location.pathname === "/range"
                ? "border-b-2 border-white"
                : "text-[#A6A6A6]"
            }
          >
            Range
          </Link>
          <Link
            to="/date"
            className={
              location.pathname === "/date"
                ? "border-b-2 border-white"
                : "text-[#A6A6A6]"
            }
          >
            Date
          </Link>
          <Link
            to="/bookmarks"
            className={
              location.pathname === "/bookmarks"
                ? "border-b-2 border-white"
                : "text-[#A6A6A6]"
            }
          >
            Saved
          </Link>
        </nav>
      )}
    </header>
  );
}
