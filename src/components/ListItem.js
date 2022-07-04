import { useDispatch } from 'react-redux'
import './ListItem.css'
import {deleteTodo, updateTodo} from '../store/actions/toDoActions'

const ListItem=(props)=>{
    const dispatch=useDispatch()
    return(
        <div className='list-item '>
            <div className={props.className}>
            <input type="checkbox" className='_input'
             checked={props.item.complete}
             onChange={()=>{
                dispatch(updateTodo(props.item.id,!props.item.complete))

             }}
             />
             <span> {props.item.text}</span>
            </div>
            {!props.item.complete && <div className='remove-list-item' onClick={()=>{
                dispatch(deleteTodo(props.item.id))
            }}>
                X
            </div>}
           
        </div>
    )

}
export default ListItem