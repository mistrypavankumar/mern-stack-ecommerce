import React, { useState } from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { Dashboard, Person, ExitToApp, ListAlt } from "@material-ui/icons";
import store from "./../../../store";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { Backdrop } from "@material-ui/core";

const UserOptions = ({ user }) => {
  const navigate = useNavigate();
  const alert = useAlert();

  const [open, setOpen] = useState(false);

  const dashboard = () => {
    navigate("/dashboard");
  };

  const account = () => {
    navigate("/account");
  };

  const orders = () => {
    navigate("/order");
  };

  const logoutUser = () => {
    store.dispatch(logout());

    alert.success("Logout Successfully");
  };

  const options = [
    {
      icon: <Person />,
      name: "Profile",
      func: account,
    },
    {
      icon: <ListAlt />,
      name: "Orders",
      func: orders,
    },

    {
      icon: <ExitToApp />,
      name: "Logout",
      func: logoutUser,
    },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <Dashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        className="h-0"
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="w-full object-cover"
            src={user.avatar.url ? user.avatar.url : "/profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((option, id) => {
          return (
            <SpeedDialAction
              key={id}
              icon={option.icon}
              tooltipTitle={option.name}
              onClick={option.func}
            />
          );
        })}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
