import SignInForm from "@/components/auth/forms/sign-in-form";
import CardWrapper from "@/components/card-wrapper";

const SignInPage = () => {
  return (
    <CardWrapper
      title="welcome back"
      description="we are excited to have your back. Sign in now and access your account"
      linkHref="/auth/sign-up"
      linkText="dont't have an account yet? sign up"
    >
      <SignInForm />
    </CardWrapper>
  );
};

export default SignInPage;
