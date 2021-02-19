import React from 'react'
import { Link } from 'react-router-dom';

function SingleQuestionTemplate({ question }) {

    const ConvertToRedableDate = (inputDate) => {
        let date = new Date(inputDate);
        return date.toDateString()
    }
    return (
        <div className="q-container">
            <div className="counts">
                <div >
                    <p>{question.score}</p>
                    <p className="small">Votes</p>
                </div>

                <div >
                    <p>{question.answer_count}</p>
                    <p className="small">Answers</p>

                </div>

                <div >
                    <p>{question.view_count}</p>
                    <p className="small">Views</p>
                </div>
            </div>

            <div className="q-title-tags">
                <p className="q-title"> <span className="q-bounty">{"+" + question.bounty_amount}
                </span>{question.title}</p>
                <p className="q-tag-edit">
                    <span>{question.tags.map((tag) => <span className="q-tag"> {"  " + tag + "  "}  </span>)}
                    </span> <span> Last modified {ConvertToRedableDate(question.last_activity_date)} by  <Link to={`/user/${question.question_id}`}>{question.owner.display_name}</Link>
                    </span>
                </p>
            </div>





        </div>
    )
}

export default SingleQuestionTemplate
