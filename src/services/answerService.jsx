import { get } from "../utils/request";
import {getCookie} from "../helpers/cookie"
export const getAnswerByUserID=async()=>{
    const userId=getCookie("id");
   
    const result=await get(`answers?userId=${userId}`);
    //console.log(result)
    return result;
}

export const getAnswer=async(id)=>{
    
   
    const result=await get(`answers/${id}`);
    //console.log(result)
    return result;
}