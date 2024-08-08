import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/firebase'; // Correct import
import { Link } from 'react-router-dom';

const MainTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topicsCollection = await db.collection('topics').get();
      setTopics(topicsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Main Topics</h1>
      <ul className="list-group">
        {topics.map(topic => (
          <li key={topic.id} className="list-group-item">
            <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
            <span className="badge badge-primary float-right">{topic.votes} Votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainTopics;
