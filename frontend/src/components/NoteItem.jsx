import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>{note.body}</Link>
    </div>
  );
};

export default NoteItem;
