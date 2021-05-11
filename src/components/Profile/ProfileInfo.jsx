import React, {memo, useEffect, useState} from 'react';
import classes from "./Profile.module.css";
import Preloader from "../../common/Preloader";

import inkoUser from "../../assets/images/user-png-image-9.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = memo((props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.info){
        return <Preloader/>
    }
    const addPhotoFun = (e) => {
        if(e.target.files.length) {
                props.addPhoto(e.target.files[0])
        }
    }





    return (
        <div className={classes.generalInfo}>

            <div className={classes.nameUser}>
                <div><h3>{props.info.fullName}</h3></div>
                <img src={props.info.photos.large||inkoUser} className={classes.mainPhoto}/>
                {props.isOwner || editMode && <input type={'file'} onChange={addPhotoFun}/> }
                <ProfileStatusWithHooks   status={props.status} updateStatus={props.updateStatus}/>
            </div>
            {editMode ? <ProfileDataForm setEditMode={setEditMode} saveProfile={props.saveProfile}   info={props.info} /> :
                <ProfileData error={props.error} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}  info={props.info}/>
            }

        </div>
    );
})
const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}
const ProfileData = ({info, goToEditMode, isOwner, error}) => {
    return <>
        {isOwner ? <button onClick={goToEditMode}>Edit mode</button> : null}
        <div className={classes.aboutMe}>
            <h4>About Me</h4>
            <h4>{info.aboutMe}</h4>
            <h4>{info.lookingForAJob ?'Ищу роботу: '+ info.lookingForAJob : null}</h4>
            <h4>{info.lookingForAJobDescription}</h4>
        </div>
        <div className={classes.links}>
            <h3>Contacts</h3>
            {Object.keys(info.contacts).map(key => {
                return  <Contact key={key} contactTitle={key} contactValue={info.contacts[key]}/>
            })}
            <div><d>{error}</d></div>
        </div>
    </>
}


export default ProfileInfo;