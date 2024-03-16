import NewVerification from "@/components/auth/new-verification";
import CardWrapper from "@/components/card-wrapper";

const NewVerificationPage = () => {
  return (
    <CardWrapper
      title="verify email"
      description="for sign up u need confirm email, check your emailbox"
      linkHref="/auth/sign-in"
      linkText="back to sign in"
    >
      <NewVerification />{" "}
    </CardWrapper>
  );
};

export default NewVerificationPage;
