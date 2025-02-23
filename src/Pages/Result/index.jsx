import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getAnswer } from "../../services/answerService";
import { getListQuestion } from "../../services/question";
import "./result.css";
function Result(){
    const params= useParams();
    const [dataResult,setDataResult]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            const dataAnswer= await getAnswer(params.id);
            const dataQuestions =await getListQuestion(dataAnswer.topicId);
            console.log(dataAnswer);
            console.log(dataQuestions);


            let resultFinal=[];
            for(let i=0;i<dataQuestions.length;i++){
                resultFinal.push({
                    ...dataAnswer.answer.find(item=>item.questionId===parseInt(dataQuestions[i].id)),
                    ...dataQuestions[i]
                    
                })
                console.log(dataQuestions[i]);
            }
            console.log(resultFinal);
            setDataResult(resultFinal);
        }
        fetchApi();
    },[])
    return(
        <>
        <h2>Kết quả:</h2>
        <div className="answer__list">
            {dataResult&&dataResult.map((item,index)=>(
                <div className="answer__item" key={item.id}>
                    <div className="form-quiz__item" key={item.id}>
                            <p>Câu {index + 1}: {item.quesion}
                                {item.correctAnswer===item.answers? (
                                    <span className="result__tag
                                    result__tag--true">Đúng</span>
                                ):(
                                    <span className="result__tag
                                     result__tag--false">Sai</span>
                                )}
                            </p>
                            {item.answer.map((itemAns, indexAns) => {
                                let className= "";
                                let checked=false;
                                if(item.answers===indexAns){
                                    checked=true;
                                    className="result__item--selected";
                                }
                                if(item.correctAnswer===indexAns){
                                    className+= " result__item--result";
                                }
                                return(
                                <div className="form-quiz__answer" 
                                key={indexAns}>
                                    <input type="radio" checked={checked} disabled/>
                                    <label  className={className}>{itemAns}</label>
                                </div>
                                )
                                
                            })}
                        </div>
                </div>
            ))}
        </div>

        </>
    )
}
export default Result;