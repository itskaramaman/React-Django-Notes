import { useState, useEffect } from "react";
import axios from "axios";

import NoteItem from "../components/NoteItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("/api/notes/");
    setNotes(response.data);
  };

  return (
    <div>
      <div>Notes List</div>
      {notes.map((note) => (
        <NoteItem key={note.created} note={note} />
      ))}
    </div>
  );
};

export default NotesListPage;
