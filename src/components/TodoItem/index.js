// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodosListDetails, deleteItem} = props
  const {title, id} = TodosListDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <p className="titile-name">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
