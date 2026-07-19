import AuthScreen from "../components/AuthScreen";
import { useRegister } from "../hooks/useRegister";

function RegisterPage() {
  const registerMutation = useRegister();

  function handleRegister(values) {
    registerMutation.mutate({
      name: values["register-name"].trim(),
      email: values["register-email"].trim(),
      password: values["register-password"],
    })
  }
  return (
    <AuthScreen
      title="Register"
      fields={[
        { id: "register-name", type: "text", placeholder: "Name", icon: "user" },
        { id: "register-email", type: "email", placeholder: "Email", icon: "mail" },
        {
          id: "register-confirm-password",
          type: "password",
          placeholder: "Confirm Password",
          icon: "lock",
          hasEye: true,
        },
        {
          id: "register-password",
          type: "password",
          placeholder: "Password",
          icon: "lock",
          hasEye: true,
        },
      ]}
      submitText="Register"
      switchPrompt="Have an account ?"
      switchText="Log in"
      switchTo="/login"
      onSubmit={handleRegister}
      isSubmitting={registerMutation.isPending}
      serverError={
        registerMutation.error?.data?.message || registerMutation.error?.message
      }
    />
  );
}

export default RegisterPage;
