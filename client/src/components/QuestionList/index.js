import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({answers, setAnswers, displayQuestions}) => {
  const myStyle = {display: "inline; !important"}

/*
const currentQuestions = useRef([])

(displayQuestions.current || []).map
*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("answers")
    console.log(answers)
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
    //console.log("handleChange name", name)
    //console.log("handleChange name", value)
      setAnswers({
        ...answers, 
        [name]: value,
      });

      console.log("handleChange answers", answers)
  };
  console.log("\n\ndisplayQuestion")
  console.log(displayQuestions)
  return (
    <>
      <ul>
        { (displayQuestions || []).map((question) => (
          <li key={question.number}>
            <span className="pt-2" style={myStyle}>
              {question.left}
              {question.choices.length ? (
                <select name={question.number} onChange={handleChange}>
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
                <input type="text" name={question.number}  onChange={handleChange}/>
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
