import React from "react";
import './FollowersCard.css';

import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
    return (
        <div className="FollowersCard">
            <h3> Who is following you</h3>

            {Followers.map((Follower, id) => {
                return (
                    <div className="Follower">Yes Follower</div>
                )
            })}
        </div>
    )
}

export default FollowersCard