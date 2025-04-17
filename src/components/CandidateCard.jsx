import React from 'react';

const CandidateCard = ({ name, img, votes, onVote }) => (
  <div className="card">
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>Votes: {votes}</p>
    <button onClick={onVote}>Vote</button>
  </div>
);

export default CandidateCard;
