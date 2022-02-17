
import {v4 as uuid } from "uuid"
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackData } from './data/feedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  // console.log(FeedbackData);

  const handleDelete = (id) =>{

    if(window.confirm("Are you sure you want to delete?")){

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) =>{

    newFeedback.id = uuid();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} ></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback}  handleDelete= {handleDelete} />
      </div>  
    </>
  );
}

export default App;


//rfce