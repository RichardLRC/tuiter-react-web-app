
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent_new from "./ExploreComponent_new.js";
function exploreComponent() {
    $('#wd-explore').append(`
    <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar('explore')}
    </div>
    <div class = "col-10 col-lg-8 col-xl-7 col-xxl-6">
        ${ExploreComponent_new()}

    </div>
    <div class="d-none d-lg-block col-lg-3 col-xl-3 col-xxl-4">
<!--    <h3>WhoToFollowList </h3>-->
        ${WhoToFollowList()}
    </div>
    </div>
   `);
}
$(exploreComponent);