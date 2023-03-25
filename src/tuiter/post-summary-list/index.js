import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";

// const PostSummaryList = () => {
//     const postsArray = useSelector(state => state.tuits);
//     return(
//         <ul className="list-group">
//             {
//                 postsArray.map(post =>
//                     <PostSummaryItem
//                         key={post._id} post={post}/> )
//             }
//         </ul>
//     );
// };
const PostSummaryList = () => {
    const postsArray = useSelector(
        (state) => state.tuits
    );

    return (
        <div className="mt-2 bg-light list-group">
            {postsArray.map(post => <PostSummaryItem key={post.id} post={post} />)}
        </div>
    );
}
export default PostSummaryList;