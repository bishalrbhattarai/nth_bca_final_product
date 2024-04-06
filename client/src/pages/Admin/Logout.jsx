import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/admin-login");
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
