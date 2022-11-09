import { FC } from "react";
import { Typography } from "@mui/material";

import UpdateProfileForm from "../../components/forms/update-profile-form/UpdateProfileForm";

const ProfilePage: FC = () => {
  return (
    <>
      <Typography>ProfilePage</Typography>
      <UpdateProfileForm />
    </>
  );
};

export default ProfilePage;
