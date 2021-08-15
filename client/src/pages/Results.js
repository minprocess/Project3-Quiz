import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_LEVEL } from '../utils/mutations';

const Results = ({answers, displayQuestions}) => {

  //console.log(props.displayQuestions);
  //console.log(props.answers);
/*
  let corr = correct;
  let incorr = incorrect;
  let unans = 0;

  if (displayQuestions.length > 0)
  {
    for (let i=0; i<displayQuestions.length; i++) {
      if (answers[displayQuestions[i].number].length > 0) {
        if (answers[displayQuestions[i].number] == displayQuestions[i].answer) {
          correct++;
        } else {
          incorrect++;
        }
      }
      else {
        unanswered++;         
      }
    }

    //     updateUserLevel($id: $id, correct: $correct, incorrect: $incorrect, unanswered:$unanswered)
    const { data } = useMutation(UPDATE_USER_LEVEL, {
      variables: {
        id: _id,
        correct: correct,
        incorrect: incorrect,
        unanswered: unanswered
      }
    });
  
  }

*/

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