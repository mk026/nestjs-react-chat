import { FC } from "react";

import SignupForm from "../../components/forms/signup-form";
import SigninLink from "../../components/signin-link";
import PageTitle from "../../components/page-title";

const SignupPage: FC = () => {
  return (
    <>
      <PageTitle>Signup</PageTitle>
      <SignupForm />
      <SigninLink />
    </>
  );
};

export default SignupPage;
