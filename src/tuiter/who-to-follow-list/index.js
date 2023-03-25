import React from "react";
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

// const WhoToFollowList = () => {
//     const whoArray = useSelector(state => state.who);
//     return(
//         <div>
//             <h1>Who To Follow!!</h1>
//         </div>
//     );
//
// };

const WhoToFollowList = () => {
    const who = useSelector(
        (state) => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <b>Who to follow</b>
            </li>
            {who.map(who => <WhoToFollowListItem key={who.id} who={who} />)}
        </ul>
    );
}

export default WhoToFollowList;