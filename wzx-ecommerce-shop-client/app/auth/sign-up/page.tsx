import CardWrapper from "@/components/auth/card-wrapper";
import SignUpForm from "@/components/auth/forms/sign-up-form";
import SocialLinks from "@/components/auth/provider";
import Separated from "@/components/separated";

const SignUpPage = () => {
  return (
    <CardWrapper
      title="sign up"
      description="ready to become part of the exclusive club? Fill in the details below, and let the journey begin!"
      linkHref="/auth/sign-in"
      linkText="already have an account? Sign in"
    >
      <SignUpForm />
    </CardWrapper>
  );
};

export default SignUpPage;
