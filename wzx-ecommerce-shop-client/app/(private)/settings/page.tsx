import { auth } from "@/auth";
import SignOutForm from "@/components/auth/sign-out-form";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <SignOutForm />
      {JSON.stringify(session)}
    </>
  );
};

export default SettingsPage;
