import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent_new = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-10">
                    <i class="fa fa-search wd-search-icon"></i>
                    <input class ="form-control wd-input-field-new wd-round-corners-new"  type="search"
                           placeholder="Search Twitter" style="padding-left: 30px;border-radius: 50px">
                </div>
                <div class="col-2">
                    <a href="../explore/explore-setting.html">
                        <i class ="fas fa-cog fa-2x .wd-right-padding wd-top-padding"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mt-2 mb-2 nav-tabs">
                      <!-- tabs -->   
                <li class = "nav-link nav-item active">
                        <a class = "wd-For-you" href="../explore/for_you.html">
                            <span class=" wd-text-white">
                                For you
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item">
                        <a class = "wd-For-other" href="../explore/trending.html">
                            <span class="wd-text-white">
                                Trending
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item">
                        <a class = "wd-For-other" href="../explore/news.html">
                            <span class="wd-text-white">
                                News
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item d-none d-sm-block">
                        <a class = "wd-For-other" href="../explore/sports.html">
                            <span class="wd-text-white">
                                Sports
                            </span>
                        </a>
                    </li>
                    <li class = "nav-link nav-item d-none d-md-block">
                        <a class = "wd-For-other" href="../explore/entertainment.html">
                            <span class="wd-text-white">
                                Entertainment
                            </span>
                        </a>
                    </li>
            </ul>
           <!-- image with overlaid text -->
            <ul class="list-group mb-2">
                <li class = "list-group-item ps-0 pe-0 pt-0 pb-0">
                        <div style="position: relative">
                            <img src="../image/spaceX.jpeg" width="100%"/>
                            <div style="position: absolute; bottom: 8px; left: 8px; color: white; font-size: 30px">
                                <b>SpaceX's Starship</b>
                            </div>
                        </div>
                </li>
            
           ${PostSummaryList()}
           </ul>
    `);
}
export default ExploreComponent_new;
