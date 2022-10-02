import React from "react";
import SearchInput from "./../components/form/SearchInput";
import Wrapper from "../components/layouts/Wrapper";
import ListItem from "./../components/list/ListItem";
import Loading from "../components/layouts/Loading";
import NoteNotFound from "../components/layouts/NoteNotFound";
import { useNotes } from "../hooks/useNotes";

const Home = () => {
  const [notes, loading, searchNotes] = useNotes();

  return (
    <Wrapper>
      <SearchInput onSearch={searchNotes} />
      {loading ? <Loading /> : notes?.length === 0 && <NoteNotFound />}

      <ListItem notes={notes} />
    </Wrapper>
  );
};

export default Home;
