import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Paths } from "../../../routes";
import { useAppSelector } from "../../../hooks/redux";
import { getAuthState } from "../../../store/selectors/authSelectors";

const AuthWrapper: FC = () => {
  const { isAuth } = useAppSelector(getAuthState);
  const location = useLocation();

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={Paths.SIGNIN} replace state={{ from: location }} />;
};

export default AuthWrapper;
