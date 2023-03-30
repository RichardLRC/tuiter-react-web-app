import React, {useEffect} from "react";
import TuitItem from "./tuitItem";
import { useDispatch, useSelector } from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            <div className="mt-2 bg-light list-group">
                {tuits.map(tuit => <TuitItem key={tuit.id} tuit={tuit} />)}
            </div>
        </ul>

    );
}

export default TuitsList;