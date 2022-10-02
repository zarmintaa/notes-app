import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import showFormattedDate from "../../utils/ShowFormettedDate";

const NoteItem = ({ title, body, createdAt, noteId }) => {
  return (
    <Link to={`/note/${noteId}`}>
      <div
        className={`p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 ring-1 ring-slate-900/5 shadow-xl hover:bg-gray-100 dark:hover:bg-slate-700 h-fit grid gap-2`}
      >
        <div className="block">
          <h1 className="text-2xl font-semibold  dark:text-white">{title}</h1>
        </div>
        <span className="text-sm text-gray-500 dark:text-slate-300">
          {showFormattedDate(createdAt)}
        </span>
        <p className="font-normal text-base text-gray-500 dark:text-slate-200 line-clamp-3">
          {body}
        </p>
      </div>
    </Link>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  noteId: PropTypes.string,
};

export default NoteItem;
