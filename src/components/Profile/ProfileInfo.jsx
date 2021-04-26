import React from 'react';
import classes from "./Profile.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import inkoUser from "../../assets/images/user-png-image-9.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {
    if (!props.info){
        return <Preloader/>
    }
    return (
        <div className={classes.generalInfo}>

            <div className={classes.nameUser}><h3>{props.info.fullName}</h3></div>
            <div className={classes.nameUser}><img src={props.info.photos.large||inkoUser}/></div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


        </div>
    );
}

export default ProfileInfo;