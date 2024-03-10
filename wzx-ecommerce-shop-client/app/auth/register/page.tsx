import CardWrapper from "@/components/auth/card-wrapper";
import RegisterForm from "@/components/auth/register-form";
import SocialLinks from "@/components/auth/social-links";
import Separated from "@/components/separated";

const RegisterPage = () => {
  return (
    <CardWrapper
      title="Register"
      description="Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!"
      linkHref="/auth/login"
      linkText="Already have an account? Login"
    >
      <div>
        <RegisterForm />
        <Separated />
        <SocialLinks />
      </div>
    </CardWrapper>
  );
};

export default RegisterPage;
