import React from 'react';

const Results = ({answers, displayQuestions}) => {

  //console.log(props.displayQuestions);
  //console.log(props.answers);


/*
let quests = displayQuestions;
// console.log ("results page")
for (let i=0; i<quests.length; i++) {
  for (var j in answers){
    //console.log("j", j, "dispQuest.num", displayQuestions[i].number)
    if (j === quests[i].number) {
      quests[i].userAnswer = answers[j]
      console.log("i answer", i, answers[j])
      //console.log(displayQuestions[i].number, displayQuestions[i].left, answers[j], displayQuestions[i].right)
    }
  }
}
console.log ("************* end of for let i")
*/
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