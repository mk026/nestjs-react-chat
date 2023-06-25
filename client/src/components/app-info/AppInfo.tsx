import { FC } from "react";
import { Card, Typography } from "@mui/material";

import classes from "./AppInfo.module.scss";

const AppInfo: FC = () => {
  return (
    <Card className={classes.card}>
      <Typography variant="body1">
        Welcome to NestJS/React Websocket Chat App
      </Typography>
    </Card>
  );
};

export default AppInfo;
