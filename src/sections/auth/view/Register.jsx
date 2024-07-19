import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/auth/auth.slice";

const Register = () => {
  const dispatch = useDispatch();

  let { counter } = useSelector((state) => state.authState);

  return (
    <div>
      <h4>{counter}</h4>
      <button
        onClick={() => {
          dispatch(
            setAuth({
              counter: (counter -= 1),
            })
          );
        }}
      >
        {" "}
        -{" "}
      </button>
      <button
        onClick={() => {
          dispatch(
            setAuth({
              counter: (counter += 1),
            })
          );
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Register;
