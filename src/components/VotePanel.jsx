import React, { useState } from 'react';
import CandidateCard from './CandidateCard.jsx';

const VotePanel = () => {
  const totalStudents = 10;
  const [votes, setVotes] = useState([0, 0]);

  const voteCandidate = (index) => {
    const totalVotes = votes.reduce((a, b) => a + b, 0);
    if (totalVotes < totalStudents) {
      const newVotes = [...votes];
      newVotes[index]++;
      setVotes(newVotes);
    } else {
      alert('All votes have been cast!');
    }
  };

  const resetVotes = () => setVotes([0, 0]);

  return (
    <div className="vote-panel">
      <h2>Vote for Your CR</h2>
      <div className="candidates">
        <CandidateCard 
          name="Adarsh" 
          img="/c1.png" 
          votes={votes[0]} 
          onVote={() => voteCandidate(0)} 
        />
        <CandidateCard 
          name="Yash" 
          img="/c2.png" 
          votes={votes[1]} 
          onVote={() => voteCandidate(1)} 
        />
      </div>
      <p>Total Votes Cast: {votes[0] + votes[1]} / {totalStudents}</p>
      {votes[0] + votes[1] === totalStudents &&
        <h3>🎉 Winner: {votes[0] > votes[1] ? 'Adarsh' : votes[0] < votes[1] ? 'Yash' : 'Tie'} 🎉</h3>
      }
      <button onClick={resetVotes}>Reset Votes</button>
    </div>
  );
};

export default VotePanel;
