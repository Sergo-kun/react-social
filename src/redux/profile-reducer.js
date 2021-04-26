import {getUsersApi, profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";

const GET_PROFILE = "GET_PROFILE";
const GET_STATUS = "GET_STATUS";


let initialState = {

        posts: [
            {id: 0, items: "Я в своем самопознании натолько преисполнился", like: 100, name: "Сергей Коваленко"},
            {id: 1, items: "Если ты первый - ТЫ ПЕРВЫЙ!", like: 100, name: "Сергей Коваленко"},
        ],
        info: null,
        status: ''


}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let postSpace = {
                id: 2,
                items: action.newPostText,
                like: 0,
                name: 'Сергей Коваленко'
            }
            return {
                ...state,
                posts: [...state.posts, postSpace],
                newPostText: ""
            }

        }
            case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id === action.postId)
            }


        case GET_PROFILE:
            return {
                ...state,
                info : {...action.profile}
            }
            case GET_STATUS:
            return {
                ...state,
                status : action.status
            }
        default:
            return state;
    }

}

export let addPost = (newPostText) => ({type : ADD_POST, newPostText});
export let deletePost = (postId) => ({type : DELETE_POST, postId});
export let getProfileSuccess = (profile) => ({type : GET_PROFILE, profile});
export let getStatusSuccess = (status) => ({type : GET_STATUS, status});

export const getProfile = (userId) => async (dispatch) =>  {

    let responce = await profileApi.getProfile(userId)

        dispatch(getProfileSuccess(responce.data))

    }

export const getProfileStatus = (userId) => async (dispatch) =>  {
   let responce = await profileApi.getStatus(userId)

        dispatch(getStatusSuccess( responce.data))

}
export const updateStatus = (status) => async (dispatch) =>  {

    let responce = await profileApi.updateStatus(status)

    if(responce.resultCode === 0){

        dispatch(getStatusSuccess(responce.data))
    }


}




export default profileReducer;