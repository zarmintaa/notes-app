import { register } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import FormRegister from "../components/form/FormRegister";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const onSubmitFormRegister = async ({ name, email, password }) => {
    setIsLoading(true);
    const { error } = await register({ name, email, password });
    if (!error) {
      alert(`login berhasil`);
      navigate("/login");
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <div className="min-h-screen">
        <FormRegister
          onSubmitRegister={onSubmitFormRegister}
          loading={loading}
        />
      </div>
    </Wrapper>
  );
};

export default Register;
