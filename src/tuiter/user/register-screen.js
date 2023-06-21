import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../services/auth-thunks";
function RegisterScreen() {
    const [user, setUser] = useState({});
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            await dispatch(registrationThunk(user));
            navigate("/tuiter/profile");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h1>Register</h1>
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
            <button onClick={handleRegister} className="btn btn-primary">
                Register
            </button>
        </div>
        // <div>
        //     <h1>Register</h1>
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
        //             onClick={handleRegister}>
        //         Register
        //     </button>
        // </div>

    );
};
export default RegisterScreen;