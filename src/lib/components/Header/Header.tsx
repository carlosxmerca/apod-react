import { useLocation } from "react-router-dom";
import logo from "../../../assets/img/nasa.webp";
import Navigation from "./Navigation";

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky bg-[#0d0d0d] z-50 top-0 w-full py-4 max-w-[60rem]">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl">APOD</p>
        <img className="h-12 object-contain" src={logo} />
      </div>
      {!location.pathname.startsWith("/apod") && <Navigation />}
    </header>
  );
}
