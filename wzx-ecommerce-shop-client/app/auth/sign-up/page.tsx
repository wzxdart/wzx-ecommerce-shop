import SignUpForm from "@/components/auth/forms/sign-up-form";
import CardWrapper from "@/components/card-wrapper";

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
