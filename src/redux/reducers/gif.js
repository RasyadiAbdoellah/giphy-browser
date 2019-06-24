import {
    GET_FAILED,
    GET_SUCCESS,
    IS_GETTING
} from '../gifActionTypes'

const initialState = {
    isGetting: false,
    getSuccess: false,
    getFailed: false,
    errorMessage: '',
    allIds: [],
    byId: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case IS_GETTING: {
            return Object.assign({}, state, {
                isGetting: true
            })
        }
        case GET_SUCCESS: {
            const { data } = action.payload
            if( data && typeof data !== 'string') {
                const dataIds = data.map(gif => gif.id) //need to check gif data structure
                const gifsById = {}
    
                data.forEach(gif => {
                    gifsById[gif.id] = {...gif} //may need to clean res before sending to this step
                });
                return Object.assign({}, state, {
                    isGetting: false,
                    getFailed: false,
                    allIds: dataIds,
                    byId: gifsById
                })
            } else {
                return Object.assign({}, state, {
                    isGetting: false,
                    getFailed: true,
                    errorMessage: action.payload // This is to capture if a 200 is sent but nothing is there.
                })
            }
        }
        case GET_FAILED: {
            return Object.assign({}, state, {
                isGetting: false,
                getFailed: true,
                errorMessage: action.payload //Will need to doublecheck this
            })
        }
        default:
            return state;
    }
}