import NewPasswordForm from "@/components/auth/forms/new-password-form";
import CardWrapper from "@/components/card-wrapper";

const NewPasswordPage = () => {
  return (
    <CardWrapper
      title="new password"
      description="enter and don't forget the new password for your account"
      linkHref="/auth/sign-in"
      linkText="back to sign in"
    >
      <NewPasswordForm />
    </CardWrapper>
  );
};

export default NewPasswordPage;
