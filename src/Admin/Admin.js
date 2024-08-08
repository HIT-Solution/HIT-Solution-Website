import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';

const Admin = () => {
    const [pendingTopics, setPendingTopics] = useState([]);

  useEffect(() => {
    const fetchPendingTopics = async () => {
      const topicsCollection = await db.collection('topics').where('approved', '==', false).get();
      setPendingTopics(topicsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchPendingTopics();
  }, []);

  const handleApprove = async (topicId) => {
    await db.collection('topics').doc(topicId).update({ approved: true });
    setPendingTopics(pendingTopics.filter(topic => topic.id !== topicId));
  };
  return (
    <div>
      <div className="container">
        <h1>Admin Panel - Approve Topics</h1>
        <ul className="list-group">
          {pendingTopics.map((topic) => (
            <li key={topic.id} className="list-group-item">
              {topic.name}
              <button
                className="btn btn-success btn-sm float-right"
                onClick={() => handleApprove(topic.id)}
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
