import { Outlet } from "react-router-dom";
import Cards from "../../components/Cards";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-[60rem] py-2">
        <Outlet />
      </div>
      <Cards />
    </>
  );
}
