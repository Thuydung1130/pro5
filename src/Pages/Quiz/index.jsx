import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/question";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";
function Quiz() {
    const params = useParams();
    const [dataTopic, setDataTopic] = useState();
    const [dataQuestion, setDataQuestion] = useState([]);
    const navigate= useNavigate();
    //console.log(params)
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response);

        }
        fetchApi();

    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id);
            //console.log(response);
            setDataQuestion(response)

        }
        fetchApi();
    }, [])
    //console.log(dataQuestion);
    //console.log(dataTopic);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(e);
        let selectedAnswers=[];
        for(let i=0;i<e.target.elements.length;i++){
            if(e.target.elements[i].checked){
                const name = e.target.elements[i].name;
                const value=e.target.elements[i].value;

                selectedAnswers.push({
                    questionId: parseInt(name),
                    answers: parseInt(value)
                })

                
            }
        }
        console.log(selectedAnswers);
        let options={
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answer: selectedAnswers
        };

        const response =await createAnswer(options);
        console.log(response);
        if(response){
            navigate(`/result/${response.id}`);
        }

    }
    return (

        <>
            <h2>Bài Quiz chủ đề: {dataTopic && (<>{dataTopic.name}</>)}</h2>
            <div className="form-quiz">
                <form action="" onSubmit={handleSubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="form-quiz__item" key={item.id}>
                            <p>Cau {index + 1}: {item.quesion}?</p>
                            {item.answer.map((itemAns, indexAns) => (
                                <div className="form-quiz__answer">
                                    <input type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                                    <label  htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit">
                        Nop bai
                    </button>
                </form>
            </div>

        </>
    )
}
export default Quiz;