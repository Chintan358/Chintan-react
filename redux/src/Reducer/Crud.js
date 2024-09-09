let initail = []

const Crud = (state = initail, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload]
            break;
        case 'DELETE_DATA':
            state.slice(action.payload, 1)

            return state

            break;

        default:
            return state
            break;
    }
}

export default Crud 