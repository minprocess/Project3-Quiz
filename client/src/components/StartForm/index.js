import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const StartForm = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <Link to="/quiz">Quiz</Link>
      ) : (
        <p>
        You need to be logged in to take a quiz. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
      )}
    </div>
  )
};
export default StartForm;