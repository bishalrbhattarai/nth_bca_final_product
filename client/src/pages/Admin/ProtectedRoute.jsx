import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeUser } from "../../redux/userSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.user.token);
  const verifyToken = async () => {
    if (!token) {
      navigate("/admin-login");
      dispatch(removeUser());
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);
  return <Outlet />;
};

export default ProtectedRoute;
