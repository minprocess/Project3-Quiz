import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Results = ({answers, displayQuestions}) => {

  const { data: userData } = useQuery(QUERY_ME);
  console.log ("userData")
  console.log (userData)
  const padStyle = {padding: "10px", border:"1px solid gray", borderCollapse: "collapse"};
  return (
    <div>
      <h4>Score including this quiz</h4>
      <p>Correct: {userData?.me.correct}</p>
      <p>Incorrect: {userData?.me.incorrect}</p>
      <p>Unanswered: {userData?.me.unanswered}</p>
      <table>
        <thead><tr><th style={padStyle}>Question</th><th style={padStyle}>Your answer</th><th style={padStyle}>Correct answer</th></tr></thead>
        { (displayQuestions || []).map((question, index) => (
            <tr><td style={padStyle}>{question.left} ______________ {question.right}
            {question.translation.length > 0 &&
              <div>
                <br/>
                {question.translation}
              </div>
            }
            </td><td style={padStyle}>   {answers[question.number]}   </td><td style={padStyle}>{question.answer}</td></tr>
          ))}    
      </table>
    </div>
  );
};

export default Results;