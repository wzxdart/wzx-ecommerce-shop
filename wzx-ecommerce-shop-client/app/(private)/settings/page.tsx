import { auth } from "@/auth";
import SignOut from "@/components/auth/sign-out";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <SignOut />
      {JSON.stringify(session)}
    </>
  );
};

export default SettingsPage;
