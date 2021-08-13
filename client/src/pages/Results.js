import React from 'react';

const Results = (props) => {

  console.log(props.displayQuestions);
  console.log(props.respState);
  
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
         Results

         Based on the responses:
         Response 0: {props.respState["resp0"]}
         Response 1: {props.respState["resp1"]}
         Response 2: {props.respState["resp2"]}
         Response 3: {props.respState["resp3"]}
         Response 4: {props.respState["resp4"]}
        </div>
      </div>
    </main>
  );
};

export default Results;