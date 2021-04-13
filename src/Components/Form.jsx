import{useDispatch} from 'react-redux';
import {formAction} from '../Actions/Acttion';

//Form Component - Adding the inputed values to the state once we clicked the addnote.
export default function Form(){
    const dispatch=useDispatch()
    return(
        <div className="forms">
            <div>Add a Note</div>
            <form>
                <label>Title</label>
                <input 
                   id="title"
                   type="text"
                   placeholder="Enter the title"
                   required>
                </input>
                <label>Context</label>
                <textarea
                    id="content"
                    placeholder="Enter the Content"
                    required>
                </textarea>
                <button type="button" onClick={()=>dispatch(formAction(document.getElementById("title").value,document.getElementById("content").value))}>Add Note</button>
            </form>
        </div>
    )
}