import React from 'react';
import Profile from "./Profile";
import {addPost, getProfile, getProfileStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





class ProfileApiComponent extends React.Component{
    componentDidMount() {

        let userId = this.props.match.params.userId


        if (!userId) {
            userId = this.props.id;

        }
       this.props.getProfile(userId)
        this.props.getProfileStatus(userId)

    }

    render() {


        return(
            <Profile {...this.props}  updateNewPostChange={this.props.updateNewPostChange}
                     addPost={this.props.addPost} updateStatus={this.props.updateStatus}


            />
        )
    }
}


let mapState = (state) => {
    return {
        profilePage: state.profilePage,
        id: state.auth.id

    }
}


export default compose(withAuthRedirect,
    withRouter,
    connect(mapState, { addPost, getProfile, getProfileStatus, updateStatus})
)(ProfileApiComponent)


