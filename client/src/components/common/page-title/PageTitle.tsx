import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

import classes from "./PageTitle.module.scss";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h2" className={classes.title}>
      {children}
    </Typography>
  );
};

export default PageTitle;
