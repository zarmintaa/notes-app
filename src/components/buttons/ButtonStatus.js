import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../../context/LocaleContext";
import { Archive, ArchiveAdd } from "iconsax-react";

const ButtonStatus = ({ actionStatus, noteId, archived }) => {
  const { locale } = useContext(LocaleContext);
  const archivedText = locale === "id" ? "Arsipkan" : "Archive";
  const unarchivedText = locale === "id" ? "Batal Arsipkan" : "Unarchive";

  return (
    <button
      type="button"
      onClick={() => actionStatus(noteId)}
      className="bg-yellow-500 text-gray-900  hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1.5 flex items-center gap-1.5"
    >
      {!archived ? (
        <ArchiveAdd size="18" color="#000000" />
      ) : (
        <Archive size="16" color="#000000" />
      )}
      {archived ? unarchivedText : archivedText}
    </button>
  );
};

ButtonStatus.propTypes = {
  actionStatus: PropTypes.func,
  noteId: PropTypes.string,
  archived: PropTypes.bool,
};

export default ButtonStatus;
