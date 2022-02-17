import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import {useContext} from "react"

import {FeedbackContext} from "../context/FeedbackContext"

function FeedbackItem({item}) {

  const {handleDelete, feedbackEdit } = useContext(FeedbackContext)
  return (
    <Card key={item.id}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=> handleDelete(item.id)}>
          <FaTimes color="purple"></FaTimes>
        </button>
        <button className="edit"  onClick={()=> feedbackEdit(item)}>
          <FaEdit color="purple"></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>

    </Card>
  )
}

Card.defaultProps = {
    reverse: false,
}

export default FeedbackItem