import {Link} from "react-router-dom";
import React from "react";

import ExploreComponent from "../explore/index";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import {Routes, Route} from "react-router";
import PostList from "../PostList";
import PostSummaryList from "../post-summary-list";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="mb-2 col-10 col-lg-7 col-xl-7 col-xxl-6">
                <ExploreComponent/>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <WhoToFollowList/>
            </div>
        </div>


    )
};

export default ExploreScreen;