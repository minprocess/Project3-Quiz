import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionList = (props) => {
  console.log("QuestionList props")
  console.log(props)

  const myStyle = {display: "inline; !important"}

  /*
   <select name="chocolates" id="chocolates">
        <option value="choose one">Choose One</option>
        <option value="maltesers">Maltesers</option>
        <option value="mars">Mars</option>
        <option value="bounty">Bounty</option>
        <option value="kitkat">Kitkat</option> </select

      >
  */

  // {question.choices.length} ? () : ()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("respState")
    console.log(props.respState)
    /*
    try {

      setResponse('');
    } catch (err) {
      console.error(err);
    }
    */
  };

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    console.log("handleChange name", name)
    console.log("handleChange name", value)
    //if (name === 'thoughtText' && value.length <= 280) {
      

      props.setRespState({
        ...props.respState, 
        [name]: value,
      });

      console.log("handleChange respState", props.respState)
  };

  return (
    <>
      <ul>
        {props && props.questions && props.questions.map((question) => (
          <li key={question.number}>
            <span className="pt-1" style={myStyle}>
              {question.left}
              {question.choices.length ? (
                <select name={question.ansName} onChange={handleChange}>
                <option value="">select...</option>
              {question.choices.map((choice) => {
                return(
                  <option value={choice}>
                    {choice}
                  </option>
                )
              })}
              </select>

              ) : 
              (
                <input type="text" name={question.ansName}  onChange={handleChange}/>
              )}
              {question.right}
            </span>
          </li>
          ))}
      </ul>
      <div className="col-12 col-lg-3">
        <Link className="btn btn-primary btn-block py-3" to="/results">
          Submit
        </Link>
      </div>
    </>
  );
}

export default QuestionList;
