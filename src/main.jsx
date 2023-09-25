import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SidebarPage from "./pages/SidebarPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import WorkerPage from "./pages/WorkerPage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<LoginPage />}/>
      <Route element={<SidebarPage/>}>
        <Route path={"dashboard"} element={<DashboardPage/>}/>
        <Route path={"workers"} element={<WorkerPage/>}/>
        <Route path={"projects"} element={<ProjectsPage/>}/>
        <Route path={"projects/:id"} element={<ProjectPage/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
