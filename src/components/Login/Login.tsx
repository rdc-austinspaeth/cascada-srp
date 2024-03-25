import { activeBorder, loginContainer } from "./Login.css";

export const Login: React.FunctionComponent = () => {
  return (
    <div className={loginContainer}>
      Log in
      <div className={activeBorder} />
    </div>
  );
}

export default Login;
