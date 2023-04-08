import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

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
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body} />
    </div>
  );
};

export default NotePage;
