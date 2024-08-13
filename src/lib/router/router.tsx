import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import {
  DateSelector,
  ExploreSelector,
  RangeSelector,
} from "../components/Selectors";
import NotFound from "../views/NotFound";
import ApodDetails from "../views/ApodDetails/ApodDetails";
import Bookmarks from "../views/Bookmarks";
import { SelectorProps } from "../interface/selectors";

interface RouterProps extends SelectorProps {}

export function Router({ setLoading }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<ExploreSelector setLoading={setLoading} />} />
        <Route
          path="range"
          element={<RangeSelector setLoading={setLoading} />}
        />
        <Route path="date" element={<DateSelector setLoading={setLoading} />} />
      </Route>
      <Route
        path="apod/:id"
        element={<ApodDetails setLoading={setLoading} />}
      />
      <Route path="bookmarks" element={<Bookmarks setLoading={setLoading} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
