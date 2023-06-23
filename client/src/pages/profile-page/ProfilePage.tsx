import { FC } from "react";

import PageTitle from "../../components/page-title";
import UpdateProfileForm from "../../components/forms/update-profile-form";
import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";

const ProfilePage: FC = () => {
  const { user } = useAppSelector(getAuthState);

  return (
    <>
      <PageTitle>ProfilePage</PageTitle>
      <UpdateProfileForm user={user!} />
    </>
  );
};

export default ProfilePage;
