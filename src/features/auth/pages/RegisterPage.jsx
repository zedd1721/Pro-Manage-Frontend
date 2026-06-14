import AuthScreen from "../components/AuthScreen";

function RegisterPage() {
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
    />
  );
}

export default RegisterPage;
