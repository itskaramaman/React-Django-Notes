import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id: noteId } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    const response = await axios.get(`/api/notes/${noteId}`);
    setNote(response.data);
  };

  return (
    <div>
      <h1>{note?.body}</h1>
    </div>
  );
};

export default NotePage;
