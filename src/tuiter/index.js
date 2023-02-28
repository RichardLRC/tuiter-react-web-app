import {Link} from "react-router-dom";
import React from "react";
import ExploreScreen from "./explore/ExploreScreen";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home/HomeComponent";
import {Routes, Route} from "react-router";
import Nav from "../nav";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-3 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-9 col-md-10 col-lg-10 col-xl-10"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter