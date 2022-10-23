
export const Name = (something)=>{
    return(dispatch)=>{
        dispatch({
           type: "something",
           payload:something,
        })
    }
}