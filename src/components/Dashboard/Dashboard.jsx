import React,{useState} from 'react'
import TopQuestions from './TopQuestions'
import {data} from './data.js'
import './dashboard.css'
function Dashboard() {
    const [questions, setQuestions] = useState(data)
    return (
        
        <div className="dashboard-container App">
             <h1>Top questions </h1>
        <TopQuestions questions = {questions}/>
        </div>
    )
}

export default Dashboard
