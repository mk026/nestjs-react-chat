import { FC } from "react";

import SigninForm from "../../components/forms/signin-form";
import SignupLink from "../../components/signup-link";
import PageTitle from "../../components/page-title";

const SigninPage: FC = () => {
  return (
    <>
      <PageTitle>Signin</PageTitle>
      <SigninForm />
      <SignupLink />
    </>
  );
};

export default SigninPage;
