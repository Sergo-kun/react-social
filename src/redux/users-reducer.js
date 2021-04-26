import {getUsersApi} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FETCHING_SVG_SHOW = "FETCHING_SHOW";
const FETCHING_BUTTON_FOLLOW_SHOW = "FETCHING_BUTTON_FOLLOW_SHOW";


let initialState = {
        users: [ ],
        usersCount : 10,
        totalCount : 0,
        activePage : 1,
        isFetching: false,
        isFetchingButtonFollow: [],


}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users : state.users.map(u => {
                    if (action.userId === u.id){
                        return {...u, followed : true}
                    }
                    return u;
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id){
                        return {...u, followed : false}
                    }
                    return u;
                })
            }
        case SET_USERS:

            return {
                ...state,
                 users : action.users
            }
        case SET_ACTIVE_PAGE:
            return {
               ...state ,
                activePage : action.page
            }
            case SET_TOTAL_COUNT:
            return {
               ...state ,
                totalCount : action.count
            }
            case FETCHING_SVG_SHOW:
            return {
               ...state ,
                isFetching : action.boolean
            }
        case FETCHING_BUTTON_FOLLOW_SHOW:
            return {
                ...state,
                isFetchingButtonFollow: action.boolean ?
            [...state.isFetchingButtonFollow, action.usersId] :
                    state.isFetchingButtonFollow.filter(id => id !== action.usersId)
            }
        default:
            return state;
    }

}
export let followSuccess = (userId) => ({type :FOLLOW,  userId});
export let unfollowSuccess = (userId) => ({type : UNFOLLOW,  userId});
export let setUsers = (users) => ({type : SET_USERS, users});
export let setActivePage = (page) => ({type : SET_ACTIVE_PAGE, page});
export let setTotalCount = (count) => ({type : SET_TOTAL_COUNT, count});
export let fetchingSvgShow = (boolean) => ({type : FETCHING_SVG_SHOW, boolean});
export let  fetchingButtonFollow = (boolean, usersId) => ({type : FETCHING_BUTTON_FOLLOW_SHOW, boolean, usersId});



export const getUsers = (activePage, usersCount) =>{
    return async (dispatch) => {
        dispatch(fetchingSvgShow(true))
        dispatch(setActivePage(activePage));
       let data = await getUsersApi.getUsers(activePage, usersCount)
            dispatch(setUsers(data.items))
            dispatch(fetchingSvgShow(false))
            dispatch(setTotalCount(data.totalCount))

    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator)  => {
    dispatch(fetchingButtonFollow(true, userId))
    let data = await apiMethod(userId)
    if(data.resultCode === 0){
        dispatch(actionCreator(userId))
    }
    dispatch(fetchingButtonFollow(false, userId))
}

export const follow = (userId) =>{
    return async (dispatch) => {
        let apiMethod = await getUsersApi.follow.bind(getUsersApi)
        let actionCreator = followSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}
export const unfollow = (userId) =>{
    return async (dispatch) => {
        let apiMethod = await getUsersApi.unfollow.bind(getUsersApi)
        let actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);


    }
}



export default usersReducer;