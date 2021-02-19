import React from 'react'
import SingleQuestionTemplate from './SingleQuestionTemplate'
function TopQuestions({questions}) {
   
    return (
        <div style={{width:'100%'}}>
           
            <hr/>
            {
                questions.map((question) => <SingleQuestionTemplate key={question.question_id} question = {question}/>)
            }
        </div>
    )
}

export default TopQuestions
