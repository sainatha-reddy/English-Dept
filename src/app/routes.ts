import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomeDepartment from "./components/Home";
import Faculty from "./components/Faculty";
import Material from "./components/Material";
// About page has been merged into Home; remove separate About import
import Programmes from "./components/Programmes";
import WritingCentre from "./components/WritingCentre";
import OtherServices from "./components/OtherServices";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeDepartment },
      { path: "programmes", Component: Programmes },
      { path: "faculty", Component: Faculty },
      { path: "material", Component: Material },
      { path: "writing-centre", Component: WritingCentre },
      { path: "other-services", Component: OtherServices },
    ],
  },
]);
