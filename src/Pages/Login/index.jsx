import "./login.css"
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import {useDispatch} from "react-redux"
import { checkLogin } from "../../actions/actions";
function Login() {
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email= e.target[0].value;
        const password= e.target[1].value;
        const respone= await login(email,password);
        if(respone.length>0){
            console.log(respone);
            setCookie("id",respone[0].id,1);
            setCookie("fullname",respone[0].fullName,1);
            setCookie("email",respone[0].email,1);
            setCookie("token",respone[0].token,1);
            dispatch(checkLogin(true));
            navigate("/")
        }
        else {
            alert("sai tai khoan hoac mk");
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit} action="" className="form">
            <h3 className="loginQuiz">Login Quiz</h3>

            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />

            <button type="submit" className="btn">Login</button>
        </form>
            
        </>
    )
}
export default Login;