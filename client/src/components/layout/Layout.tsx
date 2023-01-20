import { FC, PropsWithChildren } from "react";
import { Container } from "@mui/material";

import Header from "../header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container component="main">{children}</Container>
    </>
  );
};

export default Layout;
