import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};

export default PageTitle;
