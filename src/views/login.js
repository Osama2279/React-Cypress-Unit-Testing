import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export const USER_EMAIL = "bill@gates.com";
export const USER_PASSWORD = "12345678";

export default () => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const isValidCredentials = (data) => {
    if (data.username !== USER_EMAIL || data.password !== USER_PASSWORD) {
      return false;
    }
    return true;
  };

  const sleep = (ms, data) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (isValidCredentials(data)) resolve();
        else reject();
      }, ms)
    );

  const onSubmit = async (data, e) => {
    try {
      await sleep(2000, data);
      history.push("/home");
    } catch (error) {
      setError("username", { message: "username or password incorrect" });
      e.target.reset();
    }
  };

  return (
    <div className="container">
      <div className="signin-signup-form">
        <div className="form-items">
          <div className="form-title">Sign in to your account</div>

          <form id="signinform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-text">
              <input
                placeholder="E-mail Address"
                {...register("username", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.username && (
                <p className="error">
                  {errors.username.message || "email is required."}
                </p>
              )}
            </div>

            <div className="form-text">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && (
                <p className="error">
                  {errors.password.message || "password is required."}
                </p>
              )}
            </div>

            <div className="form-button">
              <button id="submit" type="submit" className="btn btn-default">
                Sign in <i className="hno hno-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
