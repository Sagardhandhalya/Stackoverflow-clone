import React,{useState} from 'react'
import {useParams} from 'react-router'
import {prof , topTag} from './userprofile'
import {data} from '../Dashboard/data'
import './userprofilepage.css'
import TopQuestions from '../Dashboard/TopQuestions'
import { date } from 'yup'

function UserProfilePage() {
const {userId} = useParams()
const [profile, setProfile] = useState(prof)
const [topQuestions, setTopQuestions] = useState(data)
const [topTags, setTopTags] = useState(topTag)
console.log(topTags);
    return (
        <div className="profile-page-container App">
            <div className="profile">
                <div className="avatar" >
                    <img src={profile.profile_image} alt="" width="170px" height="200px" />
                  <span className="reputation"><span className="repunumber">{profile.reputation} </span> <span>REPUTATION</span></span>  
                    <div className="badgebar">

                    <div className="badge-gold badge ">
                        <span className="gold-dot dot">
                        </span>
                        <span>{profile.badge_counts.gold}</span>
                    </div>
                    <div className="badge-silver badge">
                        <span className="silver-dot dot">
                        </span>
                        <span>{profile.badge_counts.silver}</span>
                    </div>
                    <div className="badge-bronze badge">
                        <span className="bronze-dot dot">
                        </span>
                        <span>{profile.badge_counts.bronze}</span>
                    </div>
                </div>
            </div>

                <div className="profile-details">
                    <h2> {profile.display_name}</h2>
                    <p>Location : {profile.location} </p>
                    <p>WebSite Url : {profile.website_url}</p>
                </div>
            </div>

            <h3>Top Tags</h3>
            <hr/>
            <div className="toptags">

            {
                
                topTags.map((tag) =>  <div key={Date.now()} className="card">
                            <p>{tag.name}</p>
                            <p>{tag.count}</p>
                        </div>
                )
            }
            </div>

            

            <div className="topquestions">
        <TopQuestions questions = {topQuestions} />
            </div>
        </div>
        
    )
}

export default UserProfilePage
