import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomeDepartment from "./components/Home";
import Faculty from "./components/Faculty";
import Material from "./components/Material";
import About from "./components/About";
import Programmes from "./components/Programmes";
import WritingCentre from "./components/WritingCentre";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeDepartment },
      { path: "about", Component: About },
      { path: "programmes", Component: Programmes },
      { path: "faculty", Component: Faculty },
      { path: "material", Component: Material },
      { path: "writing-centre", Component: WritingCentre },
    ],
  },
]);
