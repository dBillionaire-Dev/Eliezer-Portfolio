import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

const RequireAdminAuth: React.FC = () => {
  const { token, logout } = useAuth();
  const [verifying, setVerifying] = useState(true);
  const [valid, setValid] = useState<boolean | null>(null);

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setValid(false);
        setVerifying(false);
        return;
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data?.success) {
          setValid(true);
        } else {
          setValid(false);
          logout();
        }
      } catch (err) {
        console.error("Token verify error:", err);
        setValid(false);
        logout();
      } finally {
        setVerifying(false);
      }
    };

    verify();
  }, [token, logout]);

  if (verifying) return null; 

  if (!valid) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
};

export default RequireAdminAuth;
