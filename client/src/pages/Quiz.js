import React, { useEffect }  from 'react';
import { useQuery } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS } from '../utils/queries';

const Quiz = ({respState, setRespState, displayQuestions, setDisplayQuestions}) => {

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  
  console.log("Quiz.js loading", loading)
  // console.log("Quiz.js questions.length", data.questions.length)

  useEffect(() => {
    if (loading) return;

    const level = "ADVANCED";
  
    if (level === "ADVANCED") {
      // level = "A2";
      // set questions to 5 random level A2 questions
  
      // questions has all qustions including A1 and A2
      // go through the list and find the A2 questions and pick 5 random A2 questions
      // and put the questions into displayQuestions
      
      let filteredQuestions = data.questions.filter((question) => {
        if (question.level === "A2") {
          return true;
        } else {
          return false;
        }
      });
  
      setDisplayQuestions([
        {...filteredQuestions[0], respName: "resp0"},
        {...filteredQuestions[1], respName: "resp1"},
        {...filteredQuestions[2], respName: "resp2"},
        {...filteredQuestions[3], respName: "resp3"},
        {...filteredQuestions[4], respName: "resp4"}
      ]);
  
      console.log("in Quiz.js quests")
      console.log(data.questions);
  
    } else { // "BEGINNER"
      // level = "A1";
      // set questions to 5 random level A1 questions
  
      // questions has all qustions including A1 and A2
      // go through the list and find the A1 questions and pick 5 random A1 questions
      // and put the questions into displayQuestions
  
      let filteredQuestions = data.questions.filter((question) => {
        if (question.level === "A1") {
          return true;
        } else {
          return false;
        }
      });
  
      setDisplayQuestions([
        {...filteredQuestions[0], respName: "resp0"},
        {...filteredQuestions[1], respName: "resp1"},
        {...filteredQuestions[2], respName: "resp2"},
        {...filteredQuestions[3], respName: "resp3"},
        {...filteredQuestions[4], respName: "resp4"}
      ]);
    }
  }, [loading, setDisplayQuestions]);
 

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              respState={respState}
              setRespState={setRespState}
              questions={displayQuestions}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Quiz;