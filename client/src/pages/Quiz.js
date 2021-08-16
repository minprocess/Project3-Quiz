import React, { useEffect }  from 'react';
import { useQuery, useMutation } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS, QUERY_ME } from '../utils/queries';
import { UPDATE_USER_LEVEL } from '../utils/mutations';

const Quiz = ({answers, setAnswers, displayQuestions, setDisplayQuestions}) => {
  const { data: userData } = useQuery(QUERY_ME);
  //console.log("\n\nuserData queryme Quiz.js")
  //console.log(userData?.me)

  const { loading, data } = useQuery(QUERY_QUESTIONS, {variables: {limit: 5, level: userData?.me?.level || "A1"}});
  
  //console.log("Quiz.js loading", loading)
  // console.log("Quiz.js questions.length", data.questions.length)
  const [updateUser] = useMutation(UPDATE_USER_LEVEL);

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
    console.log("corr, incorr, unans", correct, incorrect, unanswered)
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

  useEffect(() => {
    let i = 0
    for (i=0; i<10000; i++)
    {
      i++
    }
    console.log(i)
    //console.log(data?.questions)
    if (userData && data) {
      //console.log("in if(userData) UseEffect")
      setDisplayQuestions(data.questions)
    }
    else {
      //console.log("in else UseEffect")
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