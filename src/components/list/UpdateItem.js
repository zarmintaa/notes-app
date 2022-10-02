import DeleteButton from "../buttons/DeleteButton";
import ButtonStatus from "../buttons/ButtonStatus";
import PropTypes from "prop-types";

const UpdateItem = ({ actionDelete, noteId, archived, actionStatus }) => {
  return (
    <div className="flex gap-2 items-center">
      <DeleteButton actionDelete={actionDelete} noteId={noteId} />
      <ButtonStatus
        archived={archived}
        actionStatus={actionStatus}
        noteId={noteId}
      />
    </div>
  );
};

UpdateItem.propTypes = {
  actionDelete: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  actionStatus: PropTypes.func.isRequired,
};

export default UpdateItem;
