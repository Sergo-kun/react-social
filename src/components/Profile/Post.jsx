import React from 'react';
import classes from "./Profile.module.css";

function Post({items, name, like}) {
    return (
        <div className={classes.itemPost}>
            <div className={classes.name}><h4>{name}</h4></div>
            <div className={classes.avaPost}><img src='https://i.pinimg.com/236x/57/a4/89/57a4892ee1cc569bb104b2ac5f1baee4.jpg'/></div>
            <div className={classes.post}><p>{items}</p></div>
            <div className={classes.like}><p>Лайки: {like}</p></div>
        </div>

    );
}

export default Post;