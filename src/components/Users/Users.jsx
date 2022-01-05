import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../Accets/images/profile.png'
import styles from './Users.module.css'
import { usersAPI } from '../../API/api';

const Users = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / 150) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((page, index) => {
                //     className={s.linkText} to="/users" style={({ isActive }) =>
                //     isActive ? activeStyle : undefined
                // }
                    return <span key={index}
                        onClick={(e) => { props.onPageChanged(page) }}
                        className={props.currentPage === page ? styles.selectedPage : ''}>
                        {page}
                        </span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>

                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                            </NavLink>

                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.unFollowSuccess(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollowSuccess(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)
                                        });


                                }}>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    usersAPI.followSuccess(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followSuccess(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id)
                                        })
                                }}>Подписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;