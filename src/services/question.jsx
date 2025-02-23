import { get } from "../utils/request";
export const getListQuestion=async(topicID)=>{
    const result=await get(`questions?topicID=${topicID}`)
    return result;
}