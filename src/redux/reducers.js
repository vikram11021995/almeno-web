
import { GET_COURSE_SUCCESS, GET_COURSE_ERROR} from "../services/Constant";

const initialState = {
    list: {data:[], error: null }
    // data: [],
    // error:""
}


export const getCourse = (state = initialState, action) =>{
    switch (action.type){
        case GET_COURSE_SUCCESS:   
            return{
                ...state,
                list: {data:action.data, error: null}
                // data:action.data
            };
            case GET_COURSE_ERROR:
            return{
                ...state,
                list: {data:null, error: action.data}
                // error: action.data

            };

        default:
            return state;
    }

};



