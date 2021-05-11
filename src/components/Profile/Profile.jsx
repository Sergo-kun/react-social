import React, {useEffect, useState} from 'react';
import classes from './Profile.module.css';
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../common/Preloader";



function Profile(props) {


   let [post, setPost] = useState(null)

    let postMap = props.profilePage.posts.map(p => <Post kay={`${p.items}`} items={p.items} like={p.like} name={p.name}/>);




let buttonPost = () => {
    props.addPost(post);

}
let onPostChange = (e) => {
    setPost(e.target.value);

}






            return (
                <div className={classes.content}>
                    <ProfileInfo
                        error={props.profilePage.error}
                        status={props.profilePage.status}
                        info={props.profilePage.info}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner}
                        addPhoto={props.addPhoto}
                        saveProfile={props.saveProfile}
                    />
                    <div className={classes.postText}>
                        <textarea onChange={onPostChange} value={post}/></div>
                    <div>
                        <button onClick={buttonPost}>AddPost</button>
                    </div>
                    <div className={classes.postRez}>
                        {postMap}
                    </div>
                </div>
            )

}

export default Profile;