import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import ListsScreen from "./lists-screen";
import MoreScreen from "./more-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore({
    reducer: {
        who: whoReducer, 
        tuits: tuitsReducer,
        user:  authReducer
    }
});

function Tuiter() {
    return(
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="d-flex flex-column">
                            <div className="mb-3">  
                                <NavigationSidebar />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-10 col-sm-10 order-md-2 order-1">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/notifications" element={<NotificationsScreen />}/>
                            <Route path="/messages" element={<MessagesScreen />}/>
                            <Route path="/bookmarks" element={<BookmarksScreen />}/>
                            <Route path="/lists" element={<ListsScreen />}/>
                            <Route path="/profile" element={<ProfileScreen />}/>
                            <Route path="/login"    element={<LoginScreen    />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/more" element={<MoreScreen />}/>
                        </Routes>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 d-none d-md-none d-lg-block order-md-last">
                        {/* <WhoToFollowListItem /> */}
                        {/* <WhoToFollowListItem who={{
                            userName: 'Bob', 
                            handle: 'bob', 
                            avatarIcon: 'Bob.jpg'
                        }}/>
                        <WhoToFollowListItem who={{
                            userName: 'Bob', 
                            handle: 'bob', 
                            avatarIcon: 'Bob.jpg'
                        }}/> */}
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;