import React, { useState, useRef } from "react";
import { MdMailOutline, MdLockOpen, MdFace } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/user/Button";
import InputField from "../../components/user/InputField";

const LoginSignUp = () => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const loginSubmit = () => {};

  return (
    <>
      <div className="h-screen px-8 py-24 bg-slate-200 md:px-24">
        <div className="bg-white w-full md:w-[55vh] h-[70vh] rounded-lg overflow-hidden mx-auto py-5 px-5">
          <div>
            <div className="flex justify-evenly">
              <p
                className="grid place-items-center cursor-pointer hover:text-secondaryDark"
                onClick={(e) => switchTabs(e, "login")}
              >
                Login
              </p>
              <p
                className="grid place-items-center cursor-pointer hover:text-secondaryDark"
                onClick={(e) => switchTabs(e, "register")}
              >
                Register
              </p>
            </div>
            <button
              className="h-[3px] bg-primaryBlue w-1/2 transition-all duration-500"
              ref={switcherTab}
            ></button>
          </div>
          <form
            className="flex flex-col justify-evenly items-center h-[80%] "
            ref={loginTab}
            onSubmit={loginSubmit}
          >
            <div className="flex justify-evenly flex-col h-[50%]">
              <InputField
                inputType="text"
                placeholder="Email"
                Icon={MdMailOutline}
                value={loginEmail}
                setOnChangeValue={(e) => setLoginEmail(e.target.value)}
              />

              <InputField
                inputType="password"
                placeholder="Password"
                Icon={MdLockOpen}
                value={loginPassword}
                setOnChangeValue={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <Link
              to="/password/forget"
              className="text-secondaryDark hover:text-primaryBlue transition-all duration-500"
            >
              Forget Password ?
            </Link>
            <Button label="Login" />
          </form>

          <form
            className="flex flex-col justify-evenly items-center h-[80%] "
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="flex justify-evenly flex-col h-[50%]">
              <InputField
                inputType="text"
                placeholder="Enter your name"
                Icon={MdFace}
                value={name}
                setOnChangeValue={registerDataChange}
              />

              <InputField
                inputType="text"
                placeholder="Enter your email"
                Icon={MdMailOutline}
                value={loginEmail}
                setOnChangeValue={registerDataChange}
              />

              <InputField
                inputType="password"
                placeholder="Enter your password"
                Icon={MdLockOpen}
                value={loginPassword}
                setOnChangeValue={registerDataChange}
              />

              <InputField
                inputType="password"
                placeholder="Comfirm your password"
                Icon={MdLockOpen}
                value={loginPassword}
                setOnChangeValue={registerDataChange}
              />

              <div>
                <img src="" alt="avatar preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </div>
            </div>

            <Link
              to="/password/forget"
              className="text-secondaryDark hover:text-primaryBlue transition-all duration-500"
            >
              Forget Password ?
            </Link>
            <Button label="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
