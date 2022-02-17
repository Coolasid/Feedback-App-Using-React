
import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button'
import Card from './shared/Card'
import {FeedbackContext} from "../context/FeedbackContext"

function FeedbackForm() {

    
    const {addFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState("")
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState(null);
    const [rating, setRating] = useState(10); 

    useEffect(()=>{
        // console.log("hello");
        if(editFeedback.edit === true ){
            setIsDisabled(false);
            // console.log();
            setText(editFeedback.item.text);
            setRating(editFeedback.item.rating)
        }
    }, [editFeedback])

    const handleTextChange = (e) =>{

        if(text === ""){
            setIsDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length < 10){
            setIsDisabled(true);
            setMessage("Text must be atleast 10 characters")
        }else{
            setIsDisabled(false);
            setMessage(null);
        }
        setText(e.target.value)
        // console.log(text);
    }

    // console.log(rating);

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(e);
        if(text.trim().length >= 10){
            const newFeedback = {
                text,
                rating
            }

            // console.log(newFeedback);
            if(editFeedback.edit === true ){
                updateFeedback(editFeedback.item.id, newFeedback)
                editFeedback.edit = false;
            }else{

                addFeedback(newFeedback)
            }
            setText("")
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit} >
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=> setRating(rating)}></RatingSelect>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}  />
                <Button type="submit" isDisabled={isDisabled}  >Send</Button>
                
            </div>
            {
                    message && <div className='message'>{message}</div>
                }
        </form>
    </Card>
  )
}

export default FeedbackForm