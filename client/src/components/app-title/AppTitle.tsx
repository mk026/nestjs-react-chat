import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

import { Paths } from "../../routes";

const AppTitle: FC = () => {
  return (
    <Typography mr="2rem" component={NavLink} to={Paths.HOME}>
      React Chat
    </Typography>
  );
};

export default AppTitle;
