import Wrapper from "../components/layouts/Wrapper";
import FormLogin from "../components/form/FormLogin";
import { login } from "../utils/api";
import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [loading, setIsLoading] = useState(false);
  const onSubmitFormLogin = async ({ email, password }) => {
    setIsLoading(true);
    const { error, data } = await login({ email, password });

    if (!error) {
      alert("Success Login");
      onLoginSuccess(data);
      return;
    }
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <div className="min-h-screen">
        <FormLogin onLoginSubmit={onSubmitFormLogin} loading={loading} />
      </div>
    </Wrapper>
  );
};

export default Login;
