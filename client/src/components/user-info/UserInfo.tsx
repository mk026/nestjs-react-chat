import { FC } from "react";
import { Paper, Typography } from "@mui/material";

import { IUser } from "../../models/user";

interface UserInfoProps {
  user: IUser;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <Paper>
      <Typography>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <Typography>{user.email}</Typography>
    </Paper>
  );
};

export default UserInfo;
