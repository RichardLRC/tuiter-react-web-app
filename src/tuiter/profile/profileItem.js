import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
import { useSelector } from "react-redux";
const selectProfile = (state) => state.profile.profile;

const ProfileItem = () => {
    const profile = useSelector(selectProfile);

    return (
        <>
            <div className="row mt-2">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-1">
                            <a href="#" className="wd-icon-color">
                                <i className="fas fa-long-arrow-alt-left wd-icon-color" />
                            </a>
                        </div>
                        <div className="col-11">
                            <h6>{profile.name}</h6>
                            <span className="wd-fg-gray">5000 Tweets</span>
                        </div>
                    </div>
                    <div
                        style={{ position: "relative", paddingBottom: "320px" }}
                    >
                        <img src={profile.bannerPicture} className="wd-banner-image" alt="" />
                        <img src={profile.profilePicture} className="wd-profile-image" alt="" />
                        <Link
                            to="/tuiter/EditProfileScreen"
                            className="btn btn-primary wd-edit-button"
                        >
                            Edit profile
                        </Link>
                    </div>

                    <div className="mb-2">
                        <h6>{profile.name}</h6>
                        <span className="wd-fg-gray">@{profile.handle}</span>
                        <br />
                        <span className="wd-fg-white">{profile.bio}</span>
                        <br />
                        <span className="wd-fg-gray">
              <i className="fas fa-map-marker-alt" /> {profile.location}
            </span>
                        <span
                            className="wd-fg-gray"
                            style={{ paddingLeft: "10px" }}
                        >
              {" "}
                            <i className="fas fa-birthday-cake" /> Born{" "}
                            {profile.dateOfBirth}
            </span>
                        <span
                            className="wd-fg-gray"
                            style={{ paddingLeft: "10px" }}
                        >
              {" "}
                            <i className="fas fa-calendar-alt" /> Joined{" "}
                            {profile.dateJoined}
            </span>
                        <br />
                        <span className="wd-fg-white">
              <b>{profile.followingCount}</b>
            </span>
                        <span className="wd-fg-gray"> Following</span>
                        <span
                            className="wd-fg-white"
                            style={{ paddingLeft: "15px" }}
                        >
              <b> {profile.followersCount}</b>
            </span>
                        <span className="wd-fg-gray"> Followers</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <WhoToFollowList />
                </div>
            </div>
        </>
    );
};

export default ProfileItem;
