import { Card, Typography } from "@mui/material";
import { FC } from "react";

const AppInfo: FC = () => {
  return (
    <Card>
      <Typography variant="body1">
        Welcome to NestJS/React Websocket Chat App
      </Typography>
    </Card>
  );
};

export default AppInfo;
