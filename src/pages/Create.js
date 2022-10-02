import FormAddNote from "../components/form/FormAddNote";
import Alert from "../utils/Alert";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { addNote } from "../utils/api";

const Create = () => {
  const navigate = useNavigate();

  const submitHandler = async ({ title, body }, callback) => {
    const { error, _ } = await addNote({ title, body });

    if (error) {
      alert(error);
      return;
    }

    callback();

    Alert.alertSuccess("Success", "Sukses manambahkan catatan", () => {
      navigate("/");
    });
  };

  return (
    <Wrapper>
      <section className="min-h-screen">
        <FormAddNote
          currentTitle={""}
          currentBody={""}
          submitData={submitHandler}
        />
      </section>
    </Wrapper>
  );
};

export default Create;
