/*
  This routine presents the questions to the user then puts the user's
  answers in the prop answers
*/
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({answers, setAnswers, displayQuestions}) => {
  const myStyle = {display: "inline; !important"}
  console.log("\n\n ***** Enter Question List **********")

/*
  // handleSubmit doesn't have anything to do, apparently
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("answers")
    console.log(answers)
    console.log("***** Leave Question List **********\n")
  };
*/
  // Save the characters that the user types in or clicks in the dropdowns
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers, 
      [name]: value,
    });
  };

  return (
    <>
      <ol>
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
            {question.translation.length > 0 &&
              <div>
                <br></br>
                {question.translation}
              </div>
            }
            {question.hint.length > 0 &&
              <div>
                <br></br>
                {question.hint}
              </div>
            }
          </li>
          ))}
      </ol>
      <div className="col-12 col-lg-3">
        <Link className="btn btn-primary btn-block py-3" to="/results">
          Submit
        </Link>
      </div>
    </>
  );
}

export default QuestionList;
