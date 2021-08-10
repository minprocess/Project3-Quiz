import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({
  questions
}) => {
  const myStyle = {display: "inline"}
  return (
    <ul>
      {questions && questions.map((question) => (
          <li key={question.number}>
            <p>{question.left}</p>
            <input type="text" style={myStyle}/>
          </li>
        ))}
    </ul>
  );
}

export default QuestionList;
