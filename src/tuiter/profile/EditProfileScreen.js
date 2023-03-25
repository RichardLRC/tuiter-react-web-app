import React from "react";
import TuitsList from "../tuits/tuitList";
import EditProfile from "./EditProfile";

const EditProfileScreen = () => {

    return(
        <div className="row mt-2">
            <div className="mb-2 col-10 col-lg-8 col-xl-7 col-xxl-6">
                <EditProfile/>
                <TuitsList/>
            </div>
        </div>
    );
};

export default EditProfileScreen;