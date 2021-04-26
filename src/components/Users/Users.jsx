import React from 'react';
import classes from "./Users.module.css";
import imageUser from "../../assets/images/user-png-image-9.png";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/paginator/Paginator";




function Users(props) {


    return (
            <div >
                <Paginator usersCount={props.usersCount}
                           activePage={props.activePage}
                           totalCount={props.totalCount}
                           clickPage={props.clickPage}
                />

                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : imageUser}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?  <button
                                disabled={props.isFetchingButtonFollow.some(id => id === u.id)}
                                onClick={() => {props.unfollow(u.id);}}>Unfollow</button> :
                            <button disabled={props.isFetchingButtonFollow.some(id => id === u.id)}
                                onClick={() => {props.follow(u.id);}}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>"u.resident.country"</div>
                        <div>"u.resident.city"</div>
                    </span>
                </span>
                </div>)
                }

            </div>

    );
}

export default Users;