import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({
  questions
}) => {

  console.log("number", questions[3].number)
  console.log("left", questions[3].left)
  console.log("right", questions[3].right)
  console.log("answer", questions[3].answer)
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
