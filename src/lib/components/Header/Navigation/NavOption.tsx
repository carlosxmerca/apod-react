import { Link, useLocation } from "react-router-dom";

interface NavOptionProps {
  route: string;
  value: string;
}

export default function NavOption({ route, value }: NavOptionProps) {
  const location = useLocation();

  return (
    <Link
      to={route}
      className={
        location.pathname === route
          ? "border-b-2 border-white"
          : "text-[#A6A6A6]"
      }
    >
      {value}
    </Link>
  );
}
