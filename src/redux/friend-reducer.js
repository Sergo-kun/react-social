import {getFriendsApi} from "../api/api";



const GET_FRIENDS = "GET_FRIENDS";
const IS_FETCHING = "IS_FETCHING";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    friends: [ ],
    usersCount : 10,
    totalCount : 0,
    activePage : 1,
    isFetching: false
}

const friendReducer = (state = initialState, action) => {
switch (action.type) {

    case GET_FRIENDS:
        return {
            ...state,
            friends: action.friends
        }
    case IS_FETCHING:
        return {
            ...state,
            isFetching: action.boolean
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
    default:
        return state;
}

}
let getFriendsSuccess = (friends) => ({type: GET_FRIENDS, friends})
let fetchingSvgShow = (boolean) => ({type: IS_FETCHING, boolean})
let setActivePage = (page) => ({type: SET_ACTIVE_PAGE, page})
let setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})

export let getFriends = (activePage, usersCount) => {
    return async (dispatch) => {
        dispatch(setActivePage(activePage))
        dispatch(fetchingSvgShow(true))
        let friends = await getFriendsApi.getFriends(activePage, usersCount)
        dispatch(getFriendsSuccess(friends.data.items))

        dispatch(setTotalCount(friends.data.totalCount))
        dispatch(fetchingSvgShow(false))

    }
}
export default friendReducer;