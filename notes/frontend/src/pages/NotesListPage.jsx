import { useState, useEffect } from "react";
import axios from "axios";

import NoteItem from "../components/NoteItem";
import AddButton from "../components/AddButton";

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
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      {notes.map((note) => (
        <NoteItem key={note.created} note={note} />
      ))}
      <AddButton />
    </div>
  );
};

export default NotesListPage;
