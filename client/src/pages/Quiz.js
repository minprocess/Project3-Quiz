import React, { useEffect }  from 'react';
import { useQuery, useMutation } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS, QUERY_ME } from '../utils/queries';
import { UPDATE_USER_LEVEL } from '../utils/mutations';

const Quiz = ({answers, setAnswers, displayQuestions, setDisplayQuestions}) => {
  const { data: userData } = useQuery(QUERY_ME);

  const { loading, data } = useQuery(QUERY_QUESTIONS, {variables: {limit: 5, level: userData?.me?.level || "A1"}});
  
  const [updateUser] = useMutation(UPDATE_USER_LEVEL);

  // This function is passed to the QuestionList component when the user finishes answering questions and click the Submit button
  const handleFormSubmit = async () => {
    let correct = userData.me.correct;
    let incorrect = userData.me.incorrect;
    let unanswered = userData.me.unanswered;
    for (let i=0; i<displayQuestions.length; i++) {
      if (answers[displayQuestions[i].number].length > 0) {
        if (answers[displayQuestions[i].number] === displayQuestions[i].answer) {
          correct++;
        } else {
          incorrect++;
        }
      }
      else {
        unanswered++;         
      }
    }
    try {
      const { data } = await updateUser({
        variables: {
          id: userData.me._id,
          correct,
          incorrect,
          unanswered,
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  // This parameters in this call to useEffect are 1) an anonymous callback function which sets the displayQuestions 
  // array with the questions returned from the database and 2) an optional array of dependencies. The presence of
  // the array in the parameter list means that the callback is executed only if the array has changed
  useEffect(() => {
    if (userData && data) {
      setDisplayQuestions(data.questions)
    }
    else {
      setDisplayQuestions([])
    }
  }, [data?.questions]);


  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              handleFormSubmit={handleFormSubmit}
              answers={answers}
              setAnswers={setAnswers}
              displayQuestions={displayQuestions}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Quiz;