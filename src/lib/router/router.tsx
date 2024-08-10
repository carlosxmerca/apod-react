import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import {
  DateSelector,
  ExploreSelector,
  RangeSelector,
} from "../components/Selectors";
import NotFound from "../views/NotFound";
import ApodDetails from "../views/ApodDetails/ApodDetails";
import Bookmarks from "../views/Bookmarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <ExploreSelector />,
      },
      {
        path: "range",
        element: <RangeSelector />,
      },
      {
        path: "date",
        element: <DateSelector />,
      },
    ],
  },
  {
    path: "apod/:id",
    element: <ApodDetails />,
  },
  {
    path: "bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
