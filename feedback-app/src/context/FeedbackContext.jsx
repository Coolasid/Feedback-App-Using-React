import { createContext, useState, useEffect} from "react"
import axios from "axios"
// import {FeedbackData} from "../data/feedbackData"

export const FeedbackContext = createContext();  //creating context


export const FeedbackProvider = ({children}) =>{   //this is for wrapper

  

  const [feedback , setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    getFeedback()
  },[]);

  //getting feedback from server and seeting it to feedback=>
  const getFeedback = async () =>{

    const res = await axios.get("/feedback");

      // console.log(res.data);
      setFeedback(res.data)
      setIsLoading(false)
  }

  const [editFeedback, setEditFeedback] = useState({
    item:{},
    edit: false
  })

  //delete feedback
  const handleDelete = async (id) =>{



    if(window.confirm("Are you sure you want to delete?")){

      await axios.delete(`/feedback/${id}`); 

      setFeedback(feedback.filter((item) => item.id !== id))
    }


  }

  // addFeedback
  const addFeedback = async (newFeedback) =>{

    const res = await axios.post("/feedback", newFeedback)

    // console.log(res);
    setFeedback([res.data, ...feedback])

    setIsLoading(false);
  }

  // editFeedback
  const feedbackEdit = (item) =>{

    setEditFeedback({
      item,
      edit:true
    })
  }

  // updateItem

  const updateFeedback = async (id, updateItem) =>{
      // console.log(id, updateItem);

     const res =  await axios.put(`feedback/${id}`, 
        updateItem
      )

      setFeedback(
        feedback.map((item) =>(
          item.id === id ? {...item, ...res.data} : item
        ))
      )

      isLoading(false )
  }



  return  <FeedbackContext.Provider value={{feedback, updateFeedback, isLoading, feedbackEdit, editFeedback, handleDelete, addFeedback}}>{children}</FeedbackContext.Provider>

}