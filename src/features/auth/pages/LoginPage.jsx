import AuthScreen from "../components/AuthScreen";
import { useLogin } from "../hooks/useLogin";

function LoginPage() {
  const loginMutation = useLogin();

  function handleLogin(values) {
    loginMutation.mutate({
      email: values["login-email"].trim(),
      password: values["login-password"],
    })
  }
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
      onSubmit={handleLogin}
      isSubmitting={loginMutation.isPending}
      serverError={loginMutation.error?.data?.message || loginMutation.error?.message}
    />
  );
}

export default LoginPage;
