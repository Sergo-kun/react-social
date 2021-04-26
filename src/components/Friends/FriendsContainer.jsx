import React, {useEffect} from 'react';
import classes from './Friends.module.css'
import {getFriends} from "../../redux/friend-reducer";
import Friends from "./Friends";
import {Redirect} from "react-router-dom";
import Preloader from "../../common/Preloader";
import {connect} from "react-redux";


const FriendsApiComponent = (props) => {

    useEffect( () => {
        props.getFriends(props.activePage,props.usersCount)
    },[props.activePage])


   const clickPage = (p) => {
        props.getFriends(p, props.usersCount)
    }


        {if (props.isAuth) return <Redirect to={'/login'}/>;
    return <>
        <div className={classes.friends}>
            {props.isFetching ?
                <Preloader/>
                : null}
           <Friends {...props} clickPage={clickPage}/>
       </div>
        </>
        }

}
let mapToProps = (state) => {

    return {
        friends: state.friendPage.friends,
        activePage: state.friendPage.activePage,
        usersCount: state.friendPage.usersCount,
        totalCount: state.friendPage.totalCount,
        isFetching: state.friendPage.isFetching
    }
}

const FriendsContainer = connect(mapToProps,{getFriends})(FriendsApiComponent)

export default FriendsContainer;