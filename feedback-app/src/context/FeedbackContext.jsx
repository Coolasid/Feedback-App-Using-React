import { createContext, useState} from "react"
import {v4 as uuid } from "uuid"
import {FeedbackData} from "../data/feedbackData"

export const FeedbackContext = createContext();  //creating context


export const FeedbackProvider = ({children}) =>{   //this is for wrapper

  

  const [feedback , setFeedback] = useState(FeedbackData);

  const [editFeedback, setEditFeedback] = useState({
    item:{},
    edit: false
  })

  //delete feedback
  const handleDelete = (id) =>{

    if(window.confirm("Are you sure you want to delete?")){

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // addFeedback
  const addFeedback = (newFeedback) =>{

    newFeedback.id = uuid();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback])
  }

  // editFeedback
  const feedbackEdit = (item) =>{

    setEditFeedback({
      item,
      edit:true
    })
  }

  // updateItem

  const updateFeedback = (id, updateItem) =>{
      // console.log(id, updateItem);
      setFeedback(
        feedback.map((item) =>(
          item.id === id ? {...item, ...updateItem} : item
        ))
      )

      
  }



  return  <FeedbackContext.Provider value={{feedback, updateFeedback, feedbackEdit, editFeedback, handleDelete, addFeedback}}>{children}</FeedbackContext.Provider>

}