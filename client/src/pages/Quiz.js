import React, { useEffect }  from 'react';
import { useQuery } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS, QUERY_ME } from '../utils/queries';

const Quiz = ({answers, setAnswers, displayQuestions, setDisplayQuestions}) => {
  const { data: userData } = useQuery(QUERY_ME);
  //console.log("\n\nuserData queryme Quiz.js")
  //console.log(userData?.me)

  const { loading, data } = useQuery(QUERY_QUESTIONS, {variables: {limit: 5, level: userData?.me?.level || "A1"}});
  
  //console.log("Quiz.js loading", loading)
  // console.log("Quiz.js questions.length", data.questions.length)

  useEffect(() => {
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