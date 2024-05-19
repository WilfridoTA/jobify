import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  if (user?.isAdmin) return <AdminDashboard />;

  return (
    <>
      <Text>Normal Dashboard</Text>

      <Button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </Button>
      <Text>Name: {user?.username}</Text>
      <Text>Admin: {user?.isAdmin ? "True" : "Flase"}</Text>
    </>
  );
}
