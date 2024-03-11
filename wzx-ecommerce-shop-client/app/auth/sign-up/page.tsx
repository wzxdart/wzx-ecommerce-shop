import CardWrapper from "@/components/auth/card-wrapper";
import SocialLinks from "@/components/auth/sign-in-provider";
import SignUpForm from "@/components/auth/sign-up-form";
import Separated from "@/components/separated";

const RegisterPage = () => {
  return (
    <CardWrapper
      title="Register"
      description="Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!"
      linkHref="/auth/sign-in"
      linkText="Already have an account? Login"
    >
      <div>
        <SignUpForm />
        <Separated />
        <SocialLinks />
      </div>
    </CardWrapper>
  );
};

export default RegisterPage;
