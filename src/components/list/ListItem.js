import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const ListItem = ({ notes }) => {
  return (
    <div className="grid gap-4 mt-5 mx-2.5 lg:mx-0 min-h-screen">
      <div className="grid lg:grid-cols-3 h-fit gap-4">
        {notes?.map((item) => (
          <NoteItem
            key={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            noteId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default ListItem;
