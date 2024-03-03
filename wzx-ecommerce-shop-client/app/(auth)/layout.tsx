interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>Auth layout</div>
      {children}
    </div>
  );
};

export default AuthLayout;
