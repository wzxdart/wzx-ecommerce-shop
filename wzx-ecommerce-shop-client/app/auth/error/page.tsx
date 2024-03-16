import CardWrapper from "@/components/card-wrapper";

//@todo create error page

const ErrorPage = () => {
  return (
    <CardWrapper
      title="auth error"
      description="something went wrong"
      linkHref="/auth/sign-in"
      linkText="back to sign in"
    >
      <div className="flex flex-col items-center justify-between">
        something went wrong
      </div>
    </CardWrapper>
  );
};

export default ErrorPage;
