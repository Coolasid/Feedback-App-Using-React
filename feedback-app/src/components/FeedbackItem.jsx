import Card from "./shared/Card"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({item, handleDelete}) {
  return (
    <Card key={item.id}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=> handleDelete(item.id)}>
          <FaTimes color="purple"></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>

    </Card>
  )
}

Card.defaultProps = {
    reverse: false,
}

export default FeedbackItem