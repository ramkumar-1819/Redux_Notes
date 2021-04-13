//action for adding a note
export const formAction=(title,value)=>{
    return(
        {
            type:"note",
            ttl:title,
            val:value
        }
    )
}
//action for deleting a note
export const deleteAction=(ind)=>{
    return(
        {
            type:"delete",
            index:ind
        }
    )
}