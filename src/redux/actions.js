import { GET_COURSE_SUCCESS, GET_COURSE_ERROR} from "../services/Constant";
import axios from "axios";

export const getCourse = ()=>(dispatch) => {
     axios.get("courses.json").then((res)=>{
        dispatch(getCourseSuccess(res.data));
        // console.log("hi", res.data);
    }).catch((err)=>{
        dispatch(getCourseError("something went wrong"));
    });
  
};

export const getCourseSuccess = (data) => {
  return {
    type: GET_COURSE_SUCCESS,
    data: data,
  };
};
export function getCourseError(error) {
  return {
    type: GET_COURSE_ERROR,
    data:error,
  };
}