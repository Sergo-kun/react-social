import React from'react'
import classes from "./Profile.module.css";
import {useFormik} from "formik";

const ProfileDataForm = ({info, saveProfile ,setEditMode}) => {



            const formik = useFormik({
            initialValues: {
                fullName: info.fullName,
                aboutMe: info.aboutMe,
                lookingForAJob: info.lookingForAJob,
                lookingForAJobDescription: info.lookingForAJobDescription,
                contacts: {
                    facebook: info.contacts.facebook,
                    website: info.contacts.website,
                    vk: info.contacts.vk,
                    twitter: info.contacts.twitter,
                    instagram: info.contacts.instagram,
                    youtube: info.contacts.youtube,
                    github: info.contacts.github,
                    mainLink: info.contacts.mainLink,
                }
        },
            onSubmit: values => {
                saveProfile(values);
                setEditMode(false);

        },
        });
            return (
            <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                /><br/>

                <label htmlFor="aboutMe">aboutMe</label>
                <input
                    id="aboutMe"
                    name="aboutMe"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                /><br/>

                <label htmlFor="lookingForAJob">lookingForAJob</label>
                <input
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type="checkBox"
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJob}
                    checked={formik.values.lookingForAJob}
                /><br/>
                <label htmlFor="lookingForAJobDescription">lookingForAJobDescription</label>
                <input
                    id="lookingForAJobDescription"
                    name="lookingForAJobDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJobDescription}
                /><br/>

                    <h3>Contacts</h3>
                {Object.keys(info.contacts).map(key => {
                    return <span className={classes.links}>
                        <d>{key}: </d><input
                            id={key}
                            name={"contacts."+ key}
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.contacts[key]}
                        />
                    </span>

                })}



                <button type="submit">Submit</button>

            </form>
                </>
            );







}
export default ProfileDataForm