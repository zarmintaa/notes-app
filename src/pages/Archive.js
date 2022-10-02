import Wrapper from "../components/layouts/Wrapper";
import SearchInput from "../components/form/SearchInput";
import ListItem from "../components/list/ListItem";
import Loading from "../components/layouts/Loading";
import NoteNotFound from "../components/layouts/NoteNotFound";
import { useNotes } from "../hooks/useNotes";

const Archive = () => {
  const [notes, loading, searchNotes] = useNotes("archived");

  return (
    <Wrapper>
      <SearchInput onSearch={searchNotes} />
      {loading ? <Loading /> : notes?.length === 0 && <NoteNotFound />}
      <ListItem notes={notes} />
    </Wrapper>
  );
};

export default Archive;
