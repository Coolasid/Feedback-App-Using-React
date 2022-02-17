import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback , handleDelete}) {

    // console.log(feedback);

    if(!feedback || feedback.length == 0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div>
        {
            feedback.map((item)=>{
                return <FeedbackItem key={item.rating} item= {item} handleDelete= {handleDelete} />
            })
        }
    </div>
  )
}

export default FeedbackList