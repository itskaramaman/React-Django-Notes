import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note?.body}</h3>
      </div>
    </Link>
  );
};

export default NoteItem;
