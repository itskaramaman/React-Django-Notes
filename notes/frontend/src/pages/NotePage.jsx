import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import getCookie from "../utils/getCookie";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

const NotePage = () => {
  const { id: noteId } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    if (noteId === "new") return;
    const response = await axios.get(`/api/notes/${noteId}/`);
    setNote(response.data);
  };

  const updateNote = async () => {
    if (!note.body && noteId === "new") return;
    const csrftoken = getCookie("csrftoken");
    await axios.put(
      `/api/notes/${noteId}/`,
      {
        body: note.body,
      },
      {
        headers: {
          "content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      }
    );

    navigate("/");
  };

  const deleteNote = async () => {
    const csrftoken = getCookie("csrftoken");
    await axios.delete(`/api/notes/${noteId}/`, {
      headers: {
        "content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    });

    navigate("/");
  };

  const createNote = async () => {
    const csrftoken = getCookie("csrftoken");
    await axios.post(
      `/api/notes/`,
      { body: note.body },
      {
        headers: {
          "content-type": "application/json",
          "X-CSRFToken": csrftoken,
        },
      }
    );

    navigate("/");
  };

  const handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new") {
      createNote();
    }
  };

  const handleChange = (e) => {
    setNote((note) => ({ ...note, body: e.target.value }));
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== "new" ? (
          <h3>
            <RiDeleteBin5Line onClick={deleteNote} />
          </h3>
        ) : (
          <h3>
            <AiOutlineCheck onClick={createNote} />
          </h3>
        )}
      </div>
      <textarea value={note?.body} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default NotePage;
