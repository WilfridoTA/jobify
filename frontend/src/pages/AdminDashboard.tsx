import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  return (
    <>
      <Text>Admin Dashboard</Text>
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
