import { useState } from "react";
import { useEffect } from "react";
import { getAnswerByUserID } from "../../services/answerService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";
function Answer(){
    const [dataAnswer,setDataAnswer]=useState([]);
    useEffect(() => {
            const fetchApi = async () => {
                const answersByUser = await getAnswerByUserID();
                const topics=await getListTopic();
                console.log(answersByUser)
                console.log(topics);


                let result=[];
                for(let i=0;i<answersByUser.length;i++){
                    const topic=topics.find(item=>parseInt(item.id)===answersByUser[i].topicId);
                    
                    result.push({
                       ...topic,
                         ...answersByUser[i]                     
                    })
                }
                //console.log(result)
                setDataAnswer(result.reverse());
    
            }
            fetchApi();
        }, [])
        console.log(dataAnswer);
    return(
        <>
        <h2>Danh sách chủ đề bài đã luyện tập</h2>
        {dataAnswer.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswer.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/result/"+item.id}>Xem chi tiết</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            )}

        </>
    )
}
export default Answer;