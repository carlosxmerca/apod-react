import { useState } from "react";
import Header from "./lib/components/Header";
import Loading from "./lib/components/Loading";
import { Router } from "./lib/router/router";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Loading loading={loading} />
      <main className="flex flex-col items-center px-6">
        <Header />
        <Router setLoading={setLoading} />
      </main>
    </>
  );
}
