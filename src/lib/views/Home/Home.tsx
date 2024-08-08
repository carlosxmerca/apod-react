import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Cards from "../../components/Cards";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6">
      <Header />
      <div className="w-full max-w-[60rem] py-2">
        <Outlet />
      </div>
      <Cards />
    </main>
  );
}
