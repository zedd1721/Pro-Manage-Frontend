import AuthScreen from "../components/AuthScreen";

function LoginPage() {
  return (
    <AuthScreen
      title="Login"
      fields={[
        { id: "login-email", type: "email", placeholder: "Email", icon: "mail" },
        {
          id: "login-password",
          type: "password",
          placeholder: "Password",
          icon: "lock",
          hasEye: true,
        },
      ]}
      submitText="Log in"
      switchPrompt="Have no account yet?"
      switchText="Register"
      switchTo="/register"
    />
  );
}

export default LoginPage;
