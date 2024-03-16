import CardWrapper from "@/components/auth/card-wrapper";
import SignInForm from "@/components/auth/forms/sign-in-form";
import Provider from "@/components/auth/provider";
import Separated from "@/components/separated";

const SignInPage = () => {
  return (
    <CardWrapper
      title="welcome back"
      description="we are excited to have your back. Sign in now and access your account"
      linkHref="/auth/sign-up"
      linkText="dont't have an account yet? sign up"
    >
      <div>
        <SignInForm />
        <Separated>or</Separated>
        <Provider />
      </div>
    </CardWrapper>
  );
};

export default SignInPage;
