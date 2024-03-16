import ResetForm from "@/components/auth/forms/reset-form";
import CardWrapper from "@/components/card-wrapper";

const ResetPage = () => {
  return (
    <CardWrapper
      title="reset password"
      description="if u have forgotten your password? then do not be discouraged, enter your email and we sent a reset link"
      linkHref="/auth/sign-in"
      linkText="back to sign in"
    >
      <ResetForm />
    </CardWrapper>
  );
};

export default ResetPage;
