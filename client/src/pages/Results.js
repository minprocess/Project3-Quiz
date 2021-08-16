import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_LEVEL } from '../utils/mutations';

const Results = ({answers, displayQuestions}) => {

  //console.log(props.displayQuestions);
  //console.log(props.answers);

  //let corr = correct;
  //let incorr = incorrect;
  //let unans = 0;




  //console.log("correct= ", correct, "  incorrect= ", incorrect, "  unanswered= ", unanswered )

  return (

      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">

        
        { (displayQuestions || []).map((question, index) => (
            <span className="pt-2">
                <tr><td>{question.left}</td><td>______________</td><td>{question.right}</td><td>{answers[question.number]}<td>{question.answer}</td></td></tr>
            </span>
          ))}
        </div>
      </div>

  );
};

export default Results;