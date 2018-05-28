const addNbaReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_NBA":
            return action.nbaData
        default:
           return state
    }
}

export default addNbaReducer