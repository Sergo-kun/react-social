import {connect} from "react-redux";
import React from 'react'
import {
    follow,
    unfollow,
    setActivePage,
    fetchingButtonFollow,
    getUsers,

} from "../../redux/users-reducer";

import Users from "./Users";
import classes from "./Users.module.css";
import Preloader from "../../common/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    activePageSelector, getUsersSelector, isFetchingButtonFollowSelector, isFetchingSelector,
    totalCountSelector,
    usersCountSelector
} from "../../redux/users-selectors";


class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.usersCount)

    }

    clickPage = (p) => {

    this.props.getUsers(p, this.props.usersCount)



    }

    render(){
        if (!this.props.isAuth) return <Redirect to={'/login'}/>;
        return <>
            <div className={classes.users}>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
            clickPage={this.clickPage}
            totalCount={this.props.totalCount}
            usersCount={this.props.usersCount}
            activePage={this.props.activePage}
            users={this.props.usersPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            fetchingButtonFollow={this.props.fetchingButtonFollow}
            isFetchingButtonFollow={this.props.isFetchingButtonFollow}
        />
            </div>
        </>
    }
}

/*let mapState = (state) => {
    return {
        usersPage : state.usersPage.users,
        usersCount : state.usersPage.usersCount,
        totalCount : state.usersPage.totalCount,
        activePage : state.usersPage.activePage,
        isFetching : state.usersPage.isFetching,
        isFetchingButtonFollow: state.usersPage.isFetchingButtonFollow,

    }
}*/
let mapState = (state) => {
    return {
        usersPage : getUsersSelector(state),
        usersCount : usersCountSelector(state),
        totalCount : totalCountSelector(state),
        activePage : activePageSelector(state),
        isFetching : isFetchingSelector(state),
        isFetchingButtonFollow: isFetchingButtonFollowSelector(state)

    }
}


let withAuthRedirectComponent = withAuthRedirect(UsersApiComponent)
let UsersContainer = connect(mapState, {follow, unfollow, setActivePage, fetchingButtonFollow, getUsers})
(withAuthRedirectComponent);

export default UsersContainer;