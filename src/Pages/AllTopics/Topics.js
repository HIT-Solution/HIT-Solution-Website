import React, { useEffect, useState } from "react";
import { db, auth } from "../../Firebase/firebase";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  updateDoc,
  setDoc,
  increment,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

const Topics = () => {
  const [subtopics, setSubtopics] = useState([]);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "topics", id, "subtopics"));
      const subtopicsCollection = await getDocs(q);
      setSubtopics(
        subtopicsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchData();
  }, [id]);

  const handleVote = async (subtopicId, action) => {
    const subtopicRef = doc(db, "topics", id, "subtopics", subtopicId);
    const subtopicSnap = await getDoc(subtopicRef);
    if (subtopicSnap.exists()) {
      const data = subtopicSnap.data();
      const updatedData = {
        ...data,
        votes: action === "like" ? data.votes + 1 : data.votes - 1,
      };
      await setDoc(subtopicRef, updatedData);
    }
  };

  const handleComment = async (subtopicId) => {
    const user = auth.currentUser;
    if (user) {
      await addDoc(
        collection(db, "topics", id, "subtopics", subtopicId, "comments"),
        {
          comment,
          userId: user.uid,
          createdAt: serverTimestamp(),
        }
      );
      setComment("");
      alert("Comment added!");
    } else {
      alert("Please login to comment");
    }
  };

  const handleReport = async (subtopicId) => {
    const subtopicRef = doc(db, "topics", id, "subtopics", subtopicId);
    await updateDoc(subtopicRef, {
      reports: increment(1),
    });
    alert("Reported successfully");
  };
  return (
    <div className="container">
      <h1>Subtopics</h1>
      <ul className="list-group">
        {subtopics.map((subtopic) => (
          <li key={subtopic.id} className="list-group-item">
            {subtopic.name}
            <button
              className="btn btn-success btn-sm float-right"
              onClick={() => handleVote(subtopic.id, "like")}
            >
              Like
            </button>
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => handleVote(subtopic.id, "unlike")}
            >
              Unlike
            </button>
            <button
              className="btn btn-warning btn-sm float-right"
              onClick={() => handleReport(subtopic.id)}
            >
              Report
            </button>
            <button
              className="btn btn-info btn-sm float-right"
              onClick={() => setComment("")}
            >
              Comment
            </button>
            <div>
              <input
                type="text"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleComment(subtopic.id)}
              >
                Submit Comment
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
