import { loginInnerSuspense, loginSuspense } from "./Login.css";

export const LoginSuspense: React.FunctionComponent = () => {
  return (
    <div className={loginSuspense}>
      <div className={loginInnerSuspense} />
    </div>
  )
}

export default LoginSuspense;
