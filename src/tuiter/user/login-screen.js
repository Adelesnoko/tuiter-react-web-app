import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk(user));
            navigate("/tuiter/profile");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        // <div>
        //     <h1>Login</h1>
        //     <div className="mt-2">
        //         <label>Username</label>
        //         <input className="form-control" type="text" placeholder="Username" value={username}
        //         onChange={(event) => setUsername(event.target.value)}/>
        //     </div>
        //     <div className="mt-2">
        //         <label>Password</label>
        //         <input className="form-control" type="password" placeholder="Password" value={password}
        //         onChange={(event) => setPassword(event.target.value)}/>
        //     </div>
        //     <button className="btn btn-primary mt-2"
        //             onClick={handleLogin}>
        //         Login
        //     </button>
        // </div>
        <div>
            <h1>Login</h1>
            <input
                placeholder="Username"
                className="form-control"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                placeholder="Password"
                type="password"
                className="form-control"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={handleLogin} className="btn btn-primary">
                Login
            </button>
        </div>

    );
};
export default LoginScreen;
export const user001 = 123;