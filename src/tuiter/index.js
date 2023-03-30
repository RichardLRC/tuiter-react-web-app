import {Link} from "react-router-dom";
import React from "react";
import ExploreScreen from "./explore/ExploreScreen";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Nav from "../nav";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import ProfileScreen from "./profile";
import EditProfile from "./profile/EditProfile";
import EditProfileScreen from "./profile/EditProfileScreen";



const store = configureStore({
    reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}
});



function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-3 col-md-2 col-lg-2 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-9 col-md-10 col-lg-10 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreScreen/>}/>
                        <Route path="profile" element={<ProfileScreen />} />
                        <Route path="EditProfileScreen" element={<EditProfile />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter