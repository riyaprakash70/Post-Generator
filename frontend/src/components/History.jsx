import React from 'react';

const History = ({ history }) => (
  <div className="form-section">
    <h2>Post History</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default History;