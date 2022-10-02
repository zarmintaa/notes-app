import { useParams } from "react-router-dom";
import NoteNotFound from "../components/layouts/NoteNotFound";
import Wrapper from "../components/layouts/Wrapper";
import UpdateItem from "../components/list/UpdateItem";
import Loading from "../components/layouts/Loading";
import { useDetailNote } from "../hooks/useDetailNote";
import showFormattedDate from "../utils/ShowFormettedDate";

const Detail = () => {
  const { id } = useParams();
  const [note, loading, achievedNotes, deleteItem] = useDetailNote(id);

  if (!note) {
    return (
      <div className="w-full lg:w-10/12 lg:mx-auto my-10">
        <NoteNotFound />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loading />;
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="min-h-screen">
        <div
          className={`mt-10 p-6 bg-white dark:bg-slate-800 rounded-lg border w-8/12 mx-auto border-gray-200 shadow-md hover:bg-gray-100 h-fit grid gap-2`}
        >
          <div className="block">
            <h1 className="text-3xl font-semibold  text-slate-800 dark:text-white">
              {note.title}
            </h1>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {showFormattedDate(note.createdAt)}
          </span>
          <p className="font-normal text-base text-slate-500 dark:text-slate-200">
            {note.body}
          </p>

          <div className="mt-2">
            <UpdateItem
              archived={note.archived}
              actionDelete={deleteItem}
              actionStatus={achievedNotes}
              noteId={note.id}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Detail;
