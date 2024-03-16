import SignInForm from "@/components/auth/forms/sign-in-form";
import SignInProvider from "@/components/auth/sign-in-provider";
import CardWrapper from "@/components/card-wrapper";
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
        <SignInProvider />
      </div>
    </CardWrapper>
  );
};

export default SignInPage;
