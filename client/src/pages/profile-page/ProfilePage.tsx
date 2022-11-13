import { FC } from "react";
import { Typography } from "@mui/material";

import UpdateProfileForm from "../../components/forms/update-profile-form/UpdateProfileForm";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";

const ProfilePage: FC = () => {
  const { user } = useAppSelector(getAuthState);

  return (
    <>
      <Typography>ProfilePage</Typography>
      <UpdateProfileForm user={user!} />
    </>
  );
};

export default ProfilePage;
