import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




const NotePage = ({ match }) => {
    let params = useParams();
  let noteId = match.params.id;
  let [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };
  return (
    <>
      <p>{note?.body}</p>
    </>
  );
};

export default NotePage;
