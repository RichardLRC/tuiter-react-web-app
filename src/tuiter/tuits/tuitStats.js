import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit
    }
    ) => {
    const dispatch = useDispatch();
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
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                }))
                } className="bi bi-heart-fill text-danger me-2 "></i>

                {tuit.likes}

            </div>
            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: (tuit.dislikes ?? 0) + 1,
                }))
                } className="bi bi-hand-thumbs-down-fill text-danger me-2 "></i>
                {tuit.dislikes}

            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;