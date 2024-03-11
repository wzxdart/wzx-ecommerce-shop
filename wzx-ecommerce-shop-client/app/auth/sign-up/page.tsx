import CardWrapper from "@/components/auth/card-wrapper";
import SignUpForm from "@/components/auth/sign-up-form";
import SocialLinks from "@/components/auth/social-links";
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