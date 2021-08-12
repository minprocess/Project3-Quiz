import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const QuestionList = (props) => {
  console.log("QuestionList props")
  console.log(props)

  const myStyle = {display: "inline; !important"}

  const [respState, setRespState] = useState({
    resp0: '',
    resp1: '',
    resp2: '',
    resp3: '',
    resp4: '',
  });



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
    console.log(respState)
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
      

      setRespState({
        ...respState, 
        [name]: value,
      });

      console.log("handleChange respState", respState)
  };

  return (
    <>
      <thead><tr><th>Initials</th><th>Score</th><th>Correct answers</th></tr></thead>
        {props && props.questions.map((question) => (

        <tr> <td>{question.left}</td> <td><input type="test"/></td> <td>{question.right}</td> </tr>
          ))}
      <div className="col-12 col-lg-3">
        <button className="btn btn-primary btn-block py-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default QuestionList;
