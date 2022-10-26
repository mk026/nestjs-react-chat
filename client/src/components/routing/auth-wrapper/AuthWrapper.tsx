import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Paths } from "../../../routes";

const AuthWrapper: FC = () => {
  const isAuth = true;
  const location = useLocation();

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={Paths.SIGNIN} replace state={{ from: location }} />;
};

export default AuthWrapper;
