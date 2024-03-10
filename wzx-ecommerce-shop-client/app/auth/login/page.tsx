import CardWrapper from "@/components/auth/card-wrapper";
import LoginForm from "@/components/auth/login-form";
import SocialLinks from "@/components/auth/social-links";
import Separated from "@/components/separated";

const LoginPage = () => {
  return (
    <CardWrapper
      title="Welcome back"
      description="We are excited to have your back. Log in now and access your account"
      linkHref="/auth/register"
      linkText="Dont't have an account yet? Register"
    >
      <div>
        <LoginForm />
        <Separated />
        <SocialLinks />
      </div>
    </CardWrapper>
  );
};

export default LoginPage;
