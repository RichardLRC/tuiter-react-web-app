import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../PostList";
import PostSummaryList from "../post-summary-list";
import "../bookmarks.css";

const HomeComponent = () => {
    return(
        <div className="row mt-2">
            <div className="mb-2 col-10 col-lg-7 col-xl-7 col-xxl-6">
                <PostList/>
            </div>
            <div className="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};

export default HomeComponent;