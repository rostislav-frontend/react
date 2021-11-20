import React from "react";
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.sidebar}>
            <div className={s.item}>Friends</div>
            <div>
                {props.friends}
            </div>
        </div>

    )
}

export default Friends;