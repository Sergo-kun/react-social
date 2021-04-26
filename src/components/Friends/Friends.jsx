import React from 'react';
import {NavLink} from "react-router-dom";
import imageUser from "../../assets/images/user-png-image-9.png";
import Paginator from "../../common/paginator/Paginator";


function Friends(props) {
    return (
       <div>
           <Paginator usersCount={props.usersCount}
                      activePage={props.activePage}
                      totalCount={props.totalCount}
                      clickPage={props.clickPage}
           />
           {props.friends.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : imageUser}/>
                        </NavLink>
                    </div>
                    <div>

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
           </div>)}


       </div>
    );
}

export default Friends;