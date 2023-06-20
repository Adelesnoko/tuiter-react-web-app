import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import * as tuitsService from "../services/tuits-service";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const [myTuits, setMyTuits] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch(logoutThunk());
        navigate("/tuiter/login");
    };
    
    const handleUpdate = async () => {
        try {
          await dispatch(updateUserThunk(profile));
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
        //   const { payload } = await dispatch(profileThunk());
        //   setProfile(payload);
            try {
                const { payload } = await dispatch(profileThunk());
                setProfile(payload);
            } catch (error) {
                console.error(error);
                navigate("/login");
            }
        };
        const fetchMyTuits = async () => {
            try {
              const tuits = await tuitsService.findMyTuits();
              setMyTuits(tuits);
            } catch (error) {
              console.error(error);
            }
        };
        fetchProfile();
        fetchMyTuits(); 
    }, []);
    
    return ( 
        <div>
            <h1>Profile</h1>
            {profile && (<div>
                <div>
                    <label>Username</label>
                    <input className="form-control" value={profile.username} readOnly />
                    <label>Password</label>
                    <input
                        className="form-control"
                        value={profile.password}
                        type="password"
                    />
                    <label>First Name</label>
                    <input 
                        type="text" 
                        className="mt-2"
                        value={profile.firstName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        className="mt-2"
                        value={profile.lastName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, lastName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                    />
                </div>
                </div>
            )}
            
            <button
                className="btn btn-danger ms-2 mt-2"
                onClick={handleLogout}>                   
                Logout
            </button>
            <button 
                className="btn btn-primary ms-2 mt-2"
                onClick={handleUpdate}>
                Save  
            </button>
            
            <pre>{JSON.stringify(myTuits, null, 2)}</pre>
        </div>
    );
}
export default ProfileScreen;