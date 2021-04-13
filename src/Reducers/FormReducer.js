//formReducer - If action type is "note" then we need to append the values to the state
//              If action is "delete" then we need to delete that note from the state
const formReducer=(state=[],action)=>{
   switch(action.type){
       case "note":
           return [...state,{title:action.ttl,content:action.val}];
       case "delete":
           var copy_state= [...state]
           copy_state.splice(action.index,1)
           return copy_state
        default:
            return state;
   }
}
export default formReducer;