import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      navigate("/admin");
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default PublicRoute;
