import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await register({
          variables: {
            email,
            password,
          },
        });
        history.push("/");
      }}
    >
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
