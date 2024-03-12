import CardWrapper from "@/components/auth/card-wrapper";
import SignInForm from "@/components/auth/sign-in-form";
import SocialLinks from "@/components/auth/sign-in-provider";
import Separated from "@/components/separated";

const SignInPage = () => {
  return (
    <CardWrapper
      title="Welcome back"
      description="We are excited to have your back. Sign in now and access your account"
      linkHref="/auth/sign-up"
      linkText="Dont't have an account yet? Sign up"
    >
      <div>
        <SignInForm />
        <Separated />
        <SocialLinks />
      </div>
    </CardWrapper>
  );
};

export default SignInPage;
