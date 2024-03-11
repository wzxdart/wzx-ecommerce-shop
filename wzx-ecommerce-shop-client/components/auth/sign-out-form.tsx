import { Button } from "@/components/ui/button";
import { SignOut } from "@/helpers/actions/sign-out";

const SignOutForm = () => {
  return (
    <form action={SignOut}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
};

export default SignOutForm;
