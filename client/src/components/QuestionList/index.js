import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({
  questions,
/*
  title,
  showTitle = true,
  showUsername = true,
*/
}) => {
/*
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
*/
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {questions &&
        questions.map((question) => (
          <div key={question._id}>
            <p>question.left</p>
            <Input></Input>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
