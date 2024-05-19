import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Login from "../pages/Login.tsx";
import Sidebar from "../components/Sidebar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Sidebar>
          <Dashboard />
        </Sidebar>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      const user = await localStorage.getItem("token");
      if (user) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
