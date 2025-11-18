// src/components/GlobalProtected.tsx

import { useEffect } from "react";
import { useLocation } from "wouter";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function GlobalProtected({ children }: { children: React.ReactNode }) {
  const loggedIn = useSelector((state: RootState) => state.userInfo.loggedIn);
  const [location, setLocation] = useLocation();

  const isPublicRoute = location === "/login" || location === "/signup" || location === "/";

  useEffect(() => {
    if (!loggedIn && !isPublicRoute) {
      setLocation("/login");
    }
  }, [loggedIn, isPublicRoute, setLocation]);

  // If user is not logged in and current route is protected → block UI
  if (!loggedIn && !isPublicRoute) return null;

  return <>{children}</>;
}
