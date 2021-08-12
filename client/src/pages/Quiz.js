import React from 'react';
import { useQuery } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS } from '../utils/queries';

const Quiz = () => {

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  console.log("Quiz.js loading", loading)
  console.log("Quiz.js questions.length", questions.length)

  let quests = []
  quests.push(questions[0])
  quests.push(questions[1])
  quests.push(questions[2])
  quests.push(questions[3])
  quests.push(questions[4])

  
  quests[0] = {...quests[0], respName: "resp0", respVal: ""}
  quests[1] = {...quests[1], respName: "resp1", respVal: ""}
  quests[2] = {...quests[2], respName: "resp2", respVal: ""}
  quests[3] = {...quests[3], respName: "resp3", respVal: ""}
  quests[4] = {...quests[4], respName: "resp4", respVal: ""}
  
  console.log("in Quiz.js quests")
  console.log(quests)
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              questions={quests}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Quiz;