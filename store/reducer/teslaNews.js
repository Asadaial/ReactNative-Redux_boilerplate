const initialState ='Loading...'

const getTheNews= (state=initialState,action)=>{
    switch (action.type){
        case "TESLANEWS":
            return 'ASad IQbal'
            
            default:
                return state
    }
}
export default getTheNews;

