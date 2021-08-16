import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const imgStyle = {width: "200px", height: "200px"}
const hrefStyle = {size: "5px"}
//<p><a href='https://www.freepik.com/vectors/people' style={hrefStyle}>People vector created by freepik - www.freepik.com</a></p>

const StartForm = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <Link to="/quiz">French language quiz</Link>
      ) : (
        <p>
        You need to be logged in to take a quiz. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
      )}
      <img src="images/bonjour-salut.jpg" style={imgStyle} alt="cartoon with two men speaking french"/>
    </div>
  )
};
export default StartForm;