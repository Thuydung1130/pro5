import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getListTopic } from "../../services/topicService";
import "./topics.css"

function Topics() {
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopic(response);

        }
        fetchApi();
    }, [])
    
    
    
    console.log(topic);
    return (
        <>
            <h2 className="title">Danh sách chủ đề</h2>
            {topic.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {topic.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/quiz/"+item.id}>Làm bài</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            )}

        </>
    )
}
export default Topics;