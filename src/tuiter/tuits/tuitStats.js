import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    return (
        <div className="row">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {/*<i className="fa fa-comment me-2"> </i>*/}
                {tuit.replies}
            </div>
            <div className="col">
                <i className="bi bi-reply me-2 "></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked && <i className="bi bi-heart text-danger me-2"></i>
                }
                {
                    !tuit.liked && <i className="bi bi-heart me-2"></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;