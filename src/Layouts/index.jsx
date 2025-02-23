import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./layout.css"
import { getCookie } from "../helpers/cookie";
import { useSelector } from "react-redux";
import { checkLogin } from "../actions/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function Layout() {
    const token = getCookie("token");
    //console.log(token);   
    const isLogin=useSelector(state=>state.loginReducer);
    

    console.log(isLogin);
    return (
        <>

            <header>
                <div className="LR">
                    <div className="logo">Quiz</div>
                    <div >
                        <ul className="Menu">
                            <li>
                                <button><NavLink to="/">Home</NavLink></button>
                            </li>
                            {token&&(
                                <>
                                    <li >
                                        <button><NavLink to="/topics">Topic</NavLink></button>
                                    </li>
                                    <li>
                                        <button><NavLink to="/answers">Anwser</NavLink></button>
                                    </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                    <div className="function">
                        {token ? (<>
                            <button>
                                <NavLink to="/logout">Đăng xuất</NavLink>
                            </button>
                        </>) :
                            (<>
                                <button className="login">
                                    <NavLink to="/login">Login</NavLink>
                                </button>
                                <button className="Register">
                                    <NavLink to="/register">Register</NavLink>
                                </button>
                            </>)}
                    </div>
                </div>
            </header>

            <Outlet />
            {token? (
                <>
                <footer >Copyright 2023 by 28tech</footer>
            </>):(
                <> <footer className="notoken">Copyright 2023 by 28tech</footer></>
            )}
           
        </>
    )
}
export default Layout;