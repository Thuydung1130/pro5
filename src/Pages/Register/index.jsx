import { generateToken } from "../../helpers/generateToken";
import { checkExits, register } from "../../services/userService";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const checkExitsEmail = await checkExits("email", email);
        if (checkExitsEmail.length > 0) {
            alert("email da ton tai");
        } else {
            const options = {
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken()

            }
            const respone = await register(options);
            
            if (respone) {
                navigate("/login")
            }
            else {
                alert("Dang ky ko thanh cong");
            }

        }
        

    }
    return (
        <form onSubmit={handleSubmit} action="" className="form">
            <h3 className="registerQuiz">Register Account</h3>

            <input type="text" placeholder="Full name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />

            <button className="btn">Register</button>
        </form>
    )
}
export default Register;