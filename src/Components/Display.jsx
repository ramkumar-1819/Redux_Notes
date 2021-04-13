import{useSelector,useDispatch} from 'react-redux';
import { deleteAction } from '../Actions/Acttion';

//Display Component - Displaying the state values ie(Forms we fill).
export default function Display(){
    const value=useSelector(state=>state.form)
    const dispatch=useDispatch();
    return(
        <div className="display">
        <div>All Notes</div>
        <div className="notes">
           {value.map((val,index)=>{
                        return (  <div key={index}>
                                  <div key={index} className="title_btn">
                                      <div>{val.title}</div>
                                      <button onClick={()=>dispatch(deleteAction(index))}>x</button>
                                  </div>
                                  <div className="description">{val.content}</div>
                                   </div>
                        )
            })}
           </div>
         
         </div>
    )
}