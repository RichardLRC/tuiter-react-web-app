import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row d-flex align-items-center">
                <div className="col-2">
                    <img src={`../images/${who.avatarIcon}`}
                         className="rounded-circle" width="50px" alt=""/>
                </div>
                <div className="col-6 text-nowrap">
                    <div className="col-12">
                        <b>{who.userName}</b> <i className="fa fa-check-circle"></i>
                    </div>
                    <div className="col-12">
                        {who.handle}
                    </div>
                </div>
                <div className="col-4">
                    <button className="btn rounded-pill bg-primary text-white float-end">Follow</button>
                </div>
            </div>
        </li>
    );
}

//     return(
//         <li className="list-group-item">
//             <div className="row">
//                 <div className="col-2">
//                     <img  className="rounded-circle" height={48} width={58} src={`${who.avatarIcon}`}/>
//                 </div>
//                 <div className="col-8">
//                     <div className="fw-bold">{who.userName}</div>
//                     <div>@{who.handle}</div>
//                 </div>
//                 <div className="col-2">
//                     <button className="btn btn-primary rounded-pill float-end">Follow</button>
//                 </div>
//             </div>
//         </li>
//     );
// };
export default WhoToFollowListItem;