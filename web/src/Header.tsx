import React from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "./accessToken";
import { useLogoutMutation, useMeQuery } from "./generated/graphql";

const Header: React.FC = () => {
  const { data, loading } = useMeQuery({});
  const [logout, {client}] = useLogoutMutation()

  let body: any = null;
  if (loading) {
    body = null;
  } else if (data && data.me) {
    body = <div>You are login as {data.me.email} </div>;
  } else {
    body = <div>You are not log in</div>;
  }

  return (
    <header>
      <div>
        <Link to="/register">register</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/bye">Bye</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
       {!loading && data && data.me && <button onClick={async()=>{
            await logout()
            setAccessToken('')
            await client!.resetStore()
        }}>Logout</button>}
      </div>
      {body}
    </header>
  );
};

export default Header;
